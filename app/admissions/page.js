import PageHeader from "@/components/PageHeader";
import AdmissionSteps from "@/components/AdmissionSteps";
import AdmissionForm from "@/components/AdmissionForm";

export const metadata = {
  title: "Admissions",
  description:
    "Admissions opening soon at Safeer International School. Send an enquiry for Early Years, Montessori, Primary or Middle School.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader title="Admissions" subtitle="Limited seats for the opening session — register your interest early." />
      <AdmissionSteps />
      <AdmissionForm />
    </>
  );
}
