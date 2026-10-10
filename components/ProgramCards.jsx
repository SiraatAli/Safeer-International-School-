import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

/** Round-photo program cards (home page), each linking to its section on /programs. */
export default function ProgramCards({ className = "bg-brand-mist" }) {
  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Programs"
          subtitle="A clear path from first steps to Grade 7 — with faith and character at the heart of it all."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/programs#${p.slug}`}
                className="card group flex h-full flex-col items-center px-6 pb-7 pt-8 text-center"
              >
                <span className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-brand-mist transition duration-300 group-hover:ring-brand-gold">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="144px"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </span>
                <h3 className="mt-6 text-xl font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-goldDark">{p.range}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{p.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy transition group-hover:gap-2 group-hover:text-brand-goldDark">
                  Read more <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
