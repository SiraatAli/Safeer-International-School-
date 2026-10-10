import PageHeader from "@/components/PageHeader";
import ContactInfo from "@/components/ContactInfo";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Contact Us",
  description: "Contact Safeer International School by phone, WhatsApp or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Questions about admissions or programs? We would love to hear from you." />
      <ContactInfo />
      <CtaBanner />
    </>
  );
}
