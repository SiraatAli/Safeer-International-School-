import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Gallery",
  description: "Classrooms, learning activities, facilities and campus life at Safeer International School.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="A look inside our classrooms, activities and campus." />
      <GalleryGrid />
      <CtaBanner />
    </>
  );
}
