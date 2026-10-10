import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/siteConfig";

/** Image + intro text. `showButton` adds a link to the About page (used on Home). */
export default function AboutIntro({ showButton = false, className = "bg-white" }) {
  const { about } = siteConfig;

  return (
    <section className={`section ${className}`}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-4 border-brand-gold" aria-hidden="true" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-lift">
            <Image src={about.image} alt={about.imageAlt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Welcome to Safeer</span>
            <h2 className="heading">{about.title}</h2>
            <span className="heading-bar" />
            <p className="mt-6 text-lg leading-relaxed text-gray-600">{about.text}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 rounded-full bg-brand-mist px-4 py-2 text-sm font-semibold text-brand-navy">
                  <CheckCircle2 size={16} className="text-brand-goldDark" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          {showButton && (
            <Reveal delay={0.2}>
              <Link href="/about" className="btn-navy mt-10">
                Learn More <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
