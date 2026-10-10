"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Megaphone, Moon, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/** Full-width photo hero with navy overlay (home page). */
export default function Hero() {
  const { hero } = siteConfig;

  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <Image src={hero.image} alt={hero.imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/30" />

        <div className="container-x relative grid min-h-[560px] items-center gap-10 py-20 lg:min-h-[640px] lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-navy"
            >
              <Moon size={14} aria-hidden="true" />
              {hero.badge}
            </motion.span>

            <motion.h1 {...fadeUp(0.1)} className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Inspiring <span className="text-brand-gold">Future</span> Leaders
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg text-white/85">
              {hero.subtitle}
            </motion.p>
            <motion.p {...fadeUp(0.25)} className="mt-3 text-lg font-medium italic text-brand-gold">
              &ldquo;{siteConfig.tagline}&rdquo;
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/admissions" className="btn-gold">
                Admissions Opening Soon <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/about" className="btn-outline-light">
                Learn More
              </Link>
            </motion.div>

            <motion.ul {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              {["Cambridge Aligned", "Montessori Method", "Islamic Values"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-brand-gold" aria-hidden="true" /> {t}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Opening soon card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="hidden justify-self-end lg:block"
          >
            <div className="w-80 animate-float rounded-2xl border-t-4 border-brand-gold bg-white p-7 text-brand-ink shadow-2xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy text-brand-gold">
                <CalendarCheck size={28} aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gray-500">Opening Soon</p>
              <p className="mt-1 font-heading text-3xl font-bold text-brand-navy">{siteConfig.session}</p>
              <p className="mt-2 text-sm text-gray-600">Pre-Nursery, Montessori & Grades 1 – 7</p>
              <Link href="/admissions" className="btn-navy mt-6 w-full">
                Register Interest
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Announcement strip */}
      <div className="bg-brand-gold text-brand-navy">
        <div className="container-x flex items-center justify-center gap-3 py-3 text-center text-sm font-semibold">
          <Megaphone size={18} className="shrink-0" aria-hidden="true" />
          <p>{hero.announcement}</p>
          <Link href="/admissions" className="hidden shrink-0 underline underline-offset-4 sm:inline">
            Register interest
          </Link>
        </div>
      </div>
    </>
  );
}
