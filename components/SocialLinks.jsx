import { Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const items = [
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "youtube", label: "YouTube", Icon: Youtube },
];

/** Social icon buttons. `light` is for navy backgrounds, `size="sm"` for the top bar. */
export default function SocialLinks({ light = false, size = "md" }) {
  const box = size === "sm" ? "h-7 w-7" : "h-10 w-10";
  const icon = size === "sm" ? 14 : 18;
  return (
    <ul className="flex gap-2">
      {items
        .filter(({ key }) => siteConfig.social[key])
        .map(({ key, label, Icon }) => (
          <li key={key}>
            <a
              href={siteConfig.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.name} on ${label}`}
              className={`flex ${box} items-center justify-center rounded-full transition hover:-translate-y-0.5 ${
                light
                  ? "bg-white/10 text-white hover:bg-brand-gold hover:text-brand-navy"
                  : "bg-brand-mist text-brand-navy hover:bg-brand-navy hover:text-brand-gold"
              }`}
            >
              <Icon size={icon} aria-hidden="true" />
            </a>
          </li>
        ))}
    </ul>
  );
}
