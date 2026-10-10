import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

/** Numbered 4-step admission process. */
export default function AdmissionSteps() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading eyebrow="How It Works" title="Admission Process" subtitle="Four simple steps to join the Safeer family." />
        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line on desktop */}
          <span className="absolute left-[12%] right-[12%] top-8 hidden h-0.5 bg-brand-gold/50 lg:block" aria-hidden="true" />
          {siteConfig.admissions.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} as="li" className="relative text-center">
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy font-heading text-2xl font-bold text-brand-gold ring-8 ring-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
