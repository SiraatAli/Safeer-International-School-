import PageHeader from "@/components/PageHeader";
import ProgramDetails from "@/components/ProgramDetails";
import Assessment from "@/components/Assessment";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Our Programs",
  description:
    "Early Years, Montessori, Primary (Grades 1–5) and Middle School (Grades 6–7) programs at Safeer International School.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader title="Our Programs" subtitle="From Pre-Nursery to Grade 7 — every stage builds on the last." />
      <ProgramDetails />
      <Assessment />
      <CtaBanner />
    </>
  );
}
