import Reveal from "./Reveal";

/** Eyebrow + title + gold bar + subtitle, used by every section. */
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const center = align === "center";
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && <span className={`eyebrow ${light ? "text-brand-gold" : ""}`}>{eyebrow}</span>}
      <h2 className={`heading ${light ? "text-white" : ""}`}>{title}</h2>
      <span className={`heading-bar ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-5 text-base sm:text-lg ${light ? "text-white/80" : "text-gray-600"}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
