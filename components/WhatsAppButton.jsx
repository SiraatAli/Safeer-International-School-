import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

/** Floating gold "Need Help?" WhatsApp button, fixed bottom-right with a gentle pulse. */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need help? Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full bg-brand-gold px-4 font-bold text-brand-navy shadow-lift transition hover:scale-105 sm:bottom-6 sm:right-6 sm:px-5"
    >
      <span className="absolute inset-0 animate-pulseRing rounded-full bg-brand-gold" aria-hidden="true" />
      {/* WhatsApp brand glyph */}
      <svg viewBox="0 0 32 32" className="relative h-6 w-6 fill-current" aria-hidden="true">
        <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A13 13 0 0 0 16.04 29C23.2 29 29.05 23.17 29.05 16S23.2 3 16.04 3Zm0 23.78c-1.95 0-3.86-.52-5.53-1.51l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.74 10.74 0 0 1 5.3 16c0-5.93 4.82-10.75 10.74-10.75S26.78 10.07 26.78 16 21.96 26.78 16.04 26.78Zm5.89-8.05c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.37.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 0 1-1.79-2.23c-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.29.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.33.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.62-.37Z" />
      </svg>
      <span className="relative hidden sm:inline">Need Help?</span>
    </a>
  );
}
