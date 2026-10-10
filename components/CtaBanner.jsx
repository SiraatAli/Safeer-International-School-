import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/siteConfig";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

/** Gold call-to-action band shown at the bottom of most pages. */
export default function CtaBanner() {
  return (
    <section className="bg-brand-gold">
      <Reveal className="container-x flex flex-col items-center justify-between gap-6 py-12 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">Admissions Open Soon — {siteConfig.session}</h2>
          <p className="mt-2 text-brand-navy/80">Limited seats in every class. Register your interest today.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/admissions" className="btn-navy">
            Apply / Enquire <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
