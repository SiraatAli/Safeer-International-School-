import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { getIcon } from "./icons";
import { siteConfig } from "@/lib/siteConfig";

/** Four icon cards. `showButton` adds a link to /why-safeer (used on Home). */
export default function WhyChooseGrid({ showButton = false, className = "bg-white" }) {
  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Safeer"
          title="Faith, knowledge and real-world skills"
          subtitle="A balanced education that prepares children for this life and the hereafter."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whyChoose.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card group h-full border-b-4 border-transparent p-8 text-center hover:border-brand-gold">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy text-brand-gold transition duration-300 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-navy">
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {showButton && (
          <div className="mt-12 text-center">
            <Link href="/why-safeer" className="btn-navy">
              Discover More <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
