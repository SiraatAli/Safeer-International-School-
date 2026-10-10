"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Camera, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Photo grid with a click-to-open lightbox.
 * `limit` shows only the first N photos plus a "View full gallery" link (used on Home).
 */
export default function GalleryGrid({ limit, className = "bg-white" }) {
  const images = limit ? siteConfig.gallery.slice(0, limit) : siteConfig.gallery;
  const [active, setActive] = useState(null); // index of the open image, or null

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length]);

  // Keyboard controls + lock page scroll while the lightbox is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <SectionHeading
          eyebrow="School Gallery"
          title="A glimpse of life at Safeer"
          subtitle="Bright classrooms, hands-on learning and room to grow."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold"
                aria-label={`Open image: ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-brand-navy/0 transition group-hover:bg-brand-navy/60" />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white opacity-0 transition group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold text-brand-navy">
                    <Expand size={18} aria-hidden="true" />
                  </span>
                  <span className="font-semibold">{img.caption}</span>
                </span>
                <span className="absolute bottom-0 left-0 bg-brand-navy/85 px-3 py-1.5 text-xs font-semibold text-white transition group-hover:opacity-0">
                  {img.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <Camera size={16} className="text-brand-goldDark" aria-hidden="true" />
            Real campus photos coming soon
          </p>
          {limit && (
            <Link href="/gallery" className="btn-navy">
              View Full Gallery <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-night/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={images[active].caption}
          >
            <motion.figure
              key={active}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-black">
                <Image src={images[active].src} alt={images[active].alt} fill sizes="90vw" className="object-contain" />
              </div>
              <figcaption className="mt-3 text-center text-white/90">
                {images[active].caption}{" "}
                <span className="text-brand-gold">
                  ({active + 1}/{images.length})
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-brand-gold hover:text-brand-navy"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-brand-gold hover:text-brand-navy"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-brand-gold hover:text-brand-navy"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
