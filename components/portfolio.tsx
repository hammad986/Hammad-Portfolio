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

interface ProjectsProps {
  limit?: number;
  showFilters?: boolean;
  showViewAllButton?: boolean;
}

interface CertificationsProps {
  limit?: number;
  showSearch?: boolean;
  showFilters?: boolean;
  showViewAllButton?: boolean;
}

export function PortfolioPage() {
  return (
    <main id="main-content" className="pb-16">
      <Hero />
      <Metrics />
      <Projects limit={3} showFilters={false} showViewAllButton={true} />
      <About />
      <CertificationsAndStack limit={3} showSearch={false} showFilters={false} showViewAllButton={true} />
      <TechArsenal />
      <Experience />
      <GithubOverview />
      <Contact />
      <Footer />
    </main>
  );
}
