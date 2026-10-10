import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

/** Balanced assessment weightage cards (Grades 1–7). */
export default function Assessment() {
  return (
    <section className="section bg-brand-mist">
      <div className="container-x">
        <SectionHeading
          eyebrow="Balanced Assessment"
          title="More than exam marks"
          subtitle="Grades 1–7 are assessed continuously to reduce exam anxiety. Early Years have no exams at all — just observation and learning portfolios."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.assessment.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08}>
              <div className="card h-full border-t-4 border-brand-navy p-7 text-center">
                <p className="font-heading text-5xl font-bold text-brand-navy">
                  {a.value}
                  <span className="text-brand-gold">%</span>
                </p>
                <div className="mx-auto mt-4 h-2 w-full overflow-hidden rounded-full bg-brand-mist">
                  <div className="h-full rounded-full bg-brand-gold" style={{ width: `${a.value * 2}%` }} />
                </div>
                <p className="mt-4 font-semibold text-gray-700">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
