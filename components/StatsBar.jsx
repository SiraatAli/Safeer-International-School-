import Reveal from "./Reveal";
import { siteConfig } from "@/lib/siteConfig";

/** Navy band of key numbers. */
export default function StatsBar() {
  return (
    <section className="bg-brand-navy py-12 text-white">
      <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
        {siteConfig.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-heading text-4xl font-bold text-brand-gold sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-white/80">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
