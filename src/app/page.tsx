import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { DevOpsJourney } from "@/components/DevOpsJourney";
import { Projects } from "@/components/Projects";
import { ProductionScenarios } from "@/components/ProductionScenarios";
import { DevOpsControlPlane } from "@/components/DevOpsControlPlane";
import { AWSArchitecture } from "@/components/AWSArchitecture";
import { ShipPipeline } from "@/components/ShipPipeline";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Languages } from "@/components/Languages";
import { CurrentlyExploring } from "@/components/CurrentlyExploring";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { resumeExists } from "@/lib/resume";

export default function Home() {
  const resumeAvailable = resumeExists();

  return (
    <>
      <Navbar resumeAvailable={resumeAvailable} />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <About />
        <Experience />
        <DevOpsJourney />
        <Projects />
        <ProductionScenarios />
        <DevOpsControlPlane />
        <AWSArchitecture />
        <ShipPipeline />
        <Skills />
        <Certifications />
        <Education />
        <Languages />
        <CurrentlyExploring />
        <Resume resumeAvailable={resumeAvailable} />
        <Contact />
      </main>
      <Footer resumeAvailable={resumeAvailable} />
    </>
  );
}
