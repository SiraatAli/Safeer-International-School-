import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

/** Navy title banner with breadcrumb, shown at the top of every inner page. */
export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <Image
        src={siteConfig.pageHeaderImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
      <div className="container-x relative py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/70">
          <Link href="/" className="hover:text-brand-gold">
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-brand-gold">{title}</span>
        </nav>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
        <span className="heading-bar" />
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
