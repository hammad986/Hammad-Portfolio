import { Hero } from "./sections/Hero";
import { Metrics } from "./sections/Metrics";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { CertificationsAndStack } from "./sections/Certifications";
import { TechArsenal } from "./sections/TechArsenal";
import { Experience } from "./sections/Experience";
import { GithubOverview } from "./sections/GithubOverview";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export function PortfolioPage() {
  return (
    <main>
      <Hero />
      <Metrics />
      {/* Home Page: Top 3 Flagship Projects with Direct Link to /projects */}
      <Projects limit={3} showFilters={false} showViewAllButton={true} />
      <About />
      {/* Home Page: Top 3 Flagship Credentials with Direct Link to /certifications */}
      <CertificationsAndStack limit={3} showSearch={false} showFilters={false} showViewAllButton={true} />
      <TechArsenal />
      <Experience />
      <GithubOverview />
      <Contact />
      <Footer />
    </main>
  );
}
