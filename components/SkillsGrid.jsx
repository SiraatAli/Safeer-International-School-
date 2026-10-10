import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { getIcon } from "./icons";
import { siteConfig } from "@/lib/siteConfig";

/** The compulsory Safeer Skills Programme on a navy background. */
export default function SkillsGrid() {
  return (
    <section className="section relative overflow-hidden bg-brand-navy text-white">
      <div className="bg-dots absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Value Addition"
          title="The Safeer Skills Programme"
          subtitle="Compulsory for every student — the practical skills children need for life."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.skills.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-brand-gold hover:bg-white/10">
                  <Icon size={34} className="text-brand-gold" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
