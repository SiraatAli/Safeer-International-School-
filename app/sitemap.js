import { siteConfig } from "@/lib/siteConfig";

// One entry per page in the navigation
export default function sitemap() {
  return siteConfig.nav.map((item) => ({
    url: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
