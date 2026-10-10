import { siteConfig } from "./siteConfig";

/** Builds a wa.me link with an optional prefilled message. */
export function whatsappLink(message = "") {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsAppMessage = `Assalamu Alaikum! I would like to know more about admissions at ${siteConfig.name}.`;
