import { motion } from "motion/react";
import { Layers, ArrowRight, Sparkles, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-4">
            <Layers className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Proven Full-Stack Deliverables
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-display">
            Projects &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-[#CCD6F6] to-[#64FFDA]">
              Case Studies
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Explore my flagship client store (CLENORA), full-stack publishing platform (BlogVerse), AI support tooling, and frontend web applications.
          </p>
        </motion.div>
      </div>

      {/* Main Projects Showcase */}
      <Projects />

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 space-y-4">
        <h3 className="text-2xl font-bold text-white font-display">
          Have a similar project in mind?
        </h3>
        <p className="text-slate-400 text-sm font-light">
          Whether it is an e-commerce platform, a custom dashboard, or an API backend, I can build and deploy it end-to-end.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/services"
            className="px-6 py-3 rounded-full bg-[#112240] text-slate-200 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-all"
          >
            Explore Freelance Services & Packages
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90 text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#64FFDA]/20"
          >
            Start Your Project Today
          </Link>
        </div>
      </div>
    </main>
  );
}
