import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { siteConfig } from "@/lib/siteConfig";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Admissions Opening Soon`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Safeer International School",
    "Islamic school Pakistan",
    "Cambridge Early Years",
    "Montessori school",
    "primary school admissions",
    "school admissions 2027",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/og-logo.png", width: 512, height: 512, alt: `${siteConfig.name} logo` }],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-logo.png"],
  },
};

export const viewport = {
  themeColor: "#002163",
};

// Structured data so search engines understand this is a school
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["School", "LocalBusiness"],
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og-logo.png`,
  image: `${siteConfig.url}/og-logo.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressCountry: "PK" },
  sameAs: Object.values(siteConfig.social),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
