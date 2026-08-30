import { Header } from "@/components/header";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Muhammed Hammad",
  description:
    "Explore 24+ production AI applications, SaaS platforms, desktop utilities, and deep-dive engineering case studies built by Muhammed Hammad."
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
