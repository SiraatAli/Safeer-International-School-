import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * School logo: emblem + wordmark.
 * To swap the logo, replace /public/logo-emblem.png (emblem only, transparent background).
 * `variant="light"` is for navy backgrounds (e.g. the footer).
 */
export default function Logo({ variant = "default", className = "" }) {
  const light = variant === "light";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${light ? "bg-white p-1.5" : ""}`}
      >
        <Image
          src="/logo-emblem.png"
          alt={`${siteConfig.name} logo`}
          width={96}
          height={80}
          className="h-auto w-full"
          priority
        />
      </span>
      <span className="leading-none">
        <span
          className={`block font-heading text-xl font-extrabold tracking-wide ${
            light ? "text-white" : "text-brand-navy"
          }`}
        >
          SAFEER
        </span>
        <span
          className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
            light ? "text-brand-gold" : "text-gray-500"
          }`}
        >
          International School
        </span>
      </span>
    </span>
  );
}
