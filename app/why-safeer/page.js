import PageHeader from "@/components/PageHeader";
import WhyChooseGrid from "@/components/WhyChooseGrid";
import SkillsGrid from "@/components/SkillsGrid";
import Assessment from "@/components/Assessment";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Why Choose Safeer",
  description:
    "Modern learning, Islamic values, practical life skills and whole-child development at Safeer International School.",
  alternates: { canonical: "/why-safeer" },
};

export default function WhySafeerPage() {
  return (
    <>
      <PageHeader title="Why Choose Safeer" subtitle="A balanced education for this life and the hereafter." />
      <WhyChooseGrid />
      <SkillsGrid />
      <Assessment />
      <CtaBanner />
    </>
  );
}
