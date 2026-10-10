import { useState } from "react";
import Hero from "../components/Hero";
import FiverrTrustBanner from "../components/FiverrTrustBanner";
import FreelanceServices from "../components/FreelanceServices";
import Projects from "../components/Projects";
import FreelanceProcess from "../components/FreelanceProcess";
import About from "../components/About";
import TrainingCertifications from "../components/TrainingCertifications";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <main>
      <Hero />
      <FiverrTrustBanner />
      <Projects />
      <FreelanceServices onSelectService={(service) => setSelectedService(service)} />
      <FreelanceProcess />
      <About />
      <TrainingCertifications />
      <FAQ />
      <Contact initialService={selectedService} />
    </main>
  );
}
