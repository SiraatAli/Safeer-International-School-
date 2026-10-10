import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-brand-night text-white">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            {siteConfig.tagline}. Nurturing faith, knowledge and character — from Early Years to Grade 7.
          </p>
          <div className="mt-6">
            <SocialLinks light />
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <span className="mt-3 block h-0.5 w-10 bg-brand-gold" />
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            {siteConfig.nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex items-center gap-1.5 transition hover:text-brand-gold">
                  <ChevronRight size={14} className="text-brand-gold" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-lg font-semibold">Information</h3>
          <span className="mt-3 block h-0.5 w-10 bg-brand-gold" />
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden="true" />
              {siteConfig.address}
            </li>
            <li className="flex gap-3">
              <Phone size={17} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-brand-gold">{siteConfig.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={17} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-brand-gold">{siteConfig.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Admissions {siteConfig.session}</h3>
          <span className="mt-3 block h-0.5 w-10 bg-brand-gold" />
          <p className="mt-5 text-sm text-white/75">
            Seats are limited. Register your interest early to get priority.
          </p>
          <Link href="/admissions" className="btn-gold mt-5">
            Online Enquiry
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-x py-6 text-center text-xs text-white/60">
          © 2026 {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
