import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { getIcon } from "./icons";
import { siteConfig } from "@/lib/siteConfig";

/** Alternating image/text rows, one per program (Programs page). */
export default function ProgramDetails() {
  return (
    <section className="section bg-white">
      <div className="container-x space-y-20 sm:space-y-28">
        {siteConfig.programs.map((p, i) => {
          const Icon = getIcon(p.icon);
          const flip = i % 2 === 1;
          return (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={`relative ${flip ? "lg:order-last" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
                </div>
                <span className="absolute -bottom-5 left-6 rounded-xl bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-navy shadow-lift">
                  {p.range}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-brand-gold">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-3xl font-bold text-brand-navy">{p.title}</h2>
                <p className="mt-1 text-sm font-semibold text-brand-goldDark">{p.classes}</p>
                <span className="heading-bar" />
                <p className="mt-5 text-lg text-gray-600">{p.description}</p>
                <ul className="mt-6 space-y-3">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-gray-700">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-goldDark" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
