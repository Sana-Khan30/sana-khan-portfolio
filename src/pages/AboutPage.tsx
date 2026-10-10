import { motion } from "motion/react";
import { User, FileText, ArrowRight, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TrainingCertifications from "../components/TrainingCertifications";

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-4">
            <User className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Get to Know The Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-display">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-[#CCD6F6] to-[#64FFDA]">
              Sana Khan
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            MERN Stack Developer based in Karachi, Pakistan. Combining technical full-stack engineering with corporate client relationship discipline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#112240] text-slate-200 hover:text-white hover:bg-[#233554] border border-white/10 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <FileText className="w-4 h-4 text-[#64FFDA]" />
              <span>View Printable Resume</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90 text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#64FFDA]/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me for a Project</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main About Component */}
      <About />

      {/* Corporate Experience */}
      <Experience />

      {/* Education Background */}
      <Education />

      {/* Training & Accredited Certifications */}
      <TrainingCertifications />

      {/* Bottom Conversion Strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#112240] via-[#0A192F] to-[#112240] border border-[#64FFDA]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-[#64FFDA] uppercase tracking-widest block font-bold">
              Ready to Collaborate?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Let's turn your concept into production code.
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light max-w-xl">
              Available for freelance web apps, custom admin dashboards, and full-stack MERN contracts.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full bg-[#64FFDA] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all flex items-center gap-2 shadow-lg shadow-[#64FFDA]/20"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
