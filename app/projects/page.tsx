import { Header } from "@/components/header";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Production AI applications, SaaS platforms, desktop utilities, and engineering case studies built by Muhammed Hammad (hammad986).",
  alternates: { canonical: "https://hammad986.dpdns.org/projects/" }
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </>
  );
}
