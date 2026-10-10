import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import StatsBar from "@/components/StatsBar";
import ProgramCards from "@/components/ProgramCards";
import WhyChooseGrid from "@/components/WhyChooseGrid";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata = { alternates: { canonical: "/" } };

// Home: a short preview of every page, each linking through to the full page
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro showButton />
      <ProgramCards />
      <StatsBar />
      <WhyChooseGrid showButton />
      <GalleryGrid limit={4} className="bg-brand-mist" />
      <CtaBanner />
    </>
  );
}
