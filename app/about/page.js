import PageHeader from "@/components/PageHeader";
import AboutIntro from "@/components/AboutIntro";
import MissionVision from "@/components/MissionVision";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Safeer International School — our mission, vision, values and the Cambridge, Montessori and Islamic frameworks behind our teaching.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Faith, knowledge and character — the foundations of a Safeer education." />
      <AboutIntro />
      <MissionVision />
      <StatsBar />
      <CtaBanner />
    </>
  );
}
