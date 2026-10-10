import { Clock, Mail, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/lib/siteConfig";

/** Thin navy contact strip above the navbar (desktop/tablet only). */
export default function TopBar() {
  return (
    <div className="hidden bg-brand-navy text-xs text-white/85 md:block">
      <div className="container-x flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={siteConfig.phoneHref} className="flex items-center gap-1.5 hover:text-brand-gold">
            <Phone size={13} className="text-brand-gold" aria-hidden="true" /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-brand-gold">
            <Mail size={13} className="text-brand-gold" aria-hidden="true" /> {siteConfig.email}
          </a>
          <span className="hidden items-center gap-1.5 lg:flex">
            <Clock size={13} className="text-brand-gold" aria-hidden="true" /> {siteConfig.hours}
          </span>
        </div>
        <SocialLinks size="sm" light />
      </div>
    </div>
  );
}
