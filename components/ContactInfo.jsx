import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/lib/siteConfig";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

/** Contact cards + Google Map (or placeholder until the location is confirmed). */
export default function ContactInfo() {
  const cards = [
    { title: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref, Icon: Phone },
    { title: "WhatsApp", value: "Chat with us", href: whatsappLink(defaultWhatsAppMessage), Icon: MessageCircle, external: true },
    { title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, Icon: Mail },
    { title: "Address", value: siteConfig.address, Icon: MapPin },
  ];

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ title, value, href, Icon, external }, i) => {
            const inner = (
              <>
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy text-brand-gold transition group-hover:bg-brand-gold group-hover:text-brand-navy">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <span className="mt-4 block text-lg font-bold text-brand-navy">{title}</span>
                <span className="mt-1 block break-words text-sm text-gray-600">{value}</span>
              </>
            );
            const cls = "card group block h-full border-b-4 border-transparent p-7 text-center hover:border-brand-gold";
            return (
              <Reveal key={title} delay={i * 0.06}>
                {href ? (
                  <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-mist px-6 py-5 sm:flex-row">
          <p className="flex items-center gap-2 font-medium text-brand-navy">
            <Clock size={18} className="text-brand-goldDark" aria-hidden="true" /> Office hours: {siteConfig.hours}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-brand-navy">Follow us</span>
            <SocialLinks />
          </div>
        </div>

        {/* Map */}
        <Reveal delay={0.1} className="mt-10">
          <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-soft">
            {siteConfig.mapEmbedUrl ? (
              <iframe
                src={siteConfig.mapEmbedUrl}
                title={`${siteConfig.name} location on Google Maps`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              // Placeholder until the campus location is confirmed
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-brand-navy p-8 text-center text-white">
                <div className="bg-dots absolute inset-0 opacity-40" aria-hidden="true" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-brand-navy">
                  <span className="absolute inset-0 animate-pulseRing rounded-full bg-brand-gold" aria-hidden="true" />
                  <MapPin size={28} className="relative" aria-hidden="true" />
                </span>
                <p className="relative text-xl font-bold">Location will be added when confirmed</p>
                <p className="relative max-w-sm text-sm text-white/70">
                  Our Google Maps location will appear here once the campus address is finalised.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
