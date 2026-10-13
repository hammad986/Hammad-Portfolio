import { Header } from "@/components/header";
import { About } from "@/components/sections/About";
import { TechArsenal } from "@/components/sections/TechArsenal";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Systems Architecture",
  description:
    "Systems philosophy, an interactive AI agent and RAG pipeline simulator, and the technical ecosystem of Muhammed Hammad (hammad986).",
  alternates: { canonical: "https://hammad986.dpdns.org/about/" }
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <About />
        <TechArsenal />
      </div>
      <Footer />
    </>
  );
}
