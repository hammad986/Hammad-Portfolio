import { Header } from "@/components/header";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Internships",
  description:
    "Engineering trajectory and industry internships at ThirdVizion, Saiket Systems, InAmbigous, and LabMentix with verified completion records.",
  alternates: { canonical: "https://hammad986.dpdns.org/experience/" }
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Experience />
      </div>
      <Footer />
    </>
  );
}
