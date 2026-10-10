import { Eye, Gem, Target } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { getIcon } from "./icons";
import { siteConfig } from "@/lib/siteConfig";

/** Mission, vision, core values and the three learning frameworks (About page). */
export default function MissionVision() {
  const { about } = siteConfig;
  const cards = [
    { title: "Our Mission", text: about.mission, Icon: Target },
    { title: "Our Vision", text: about.vision, Icon: Eye },
  ];

  return (
    <>
      <section className="section bg-brand-mist">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {cards.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="card h-full border-l-4 border-brand-gold p-8">
                <Icon size={34} className="text-brand-navy" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold text-brand-navy">{title}</h2>
                <p className="mt-3 leading-relaxed text-gray-600">{text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl bg-brand-navy p-8 text-white shadow-soft">
              <Gem size={34} className="text-brand-gold" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold">Our Values</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.values.map((v) => (
                  <li key={v} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Approach"
            title="Three frameworks, one child-centred school"
            subtitle="Academic rigour, hands-on discovery and strong Islamic character — working together every day."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {about.frameworks.map((f, i) => {
              const Icon = getIcon(f.icon);
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="card group h-full p-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-gold text-brand-navy transition group-hover:bg-brand-navy group-hover:text-brand-gold">
                      <Icon size={26} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-brand-navy">{f.title}</h3>
                    <p className="mt-2 text-gray-600">{f.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
