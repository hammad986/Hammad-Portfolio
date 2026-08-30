import { Header } from "@/components/header";
import { About } from "@/components/sections/About";
import { TechArsenal } from "@/components/sections/TechArsenal";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Systems Architecture | Muhammed Hammad",
  description:
    "Systems philosophy, interactive AI agent & RAG pipeline simulator, and technical ecosystem of Muhammed Hammad."
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
