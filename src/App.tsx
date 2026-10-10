import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Resume from "./components/Resume";

export default function App() {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";

  return (
    <div className="bg-[#0A192F] min-h-screen text-slate-200 selection:bg-[#64FFDA]/30 selection:text-[#64FFDA] flex flex-col justify-between">
      <ScrollToTop />
      {!isResumePage && <Navbar />}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {!isResumePage && <Footer />}
      {!isResumePage && <StickyMobileCTA />}
    </div>
  );
}
