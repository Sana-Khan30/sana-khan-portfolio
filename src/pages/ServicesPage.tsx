import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import FreelanceServices from "../components/FreelanceServices";
import FreelanceProcess from "../components/FreelanceProcess";
import FiverrTrustBanner from "../components/FiverrTrustBanner";
import FAQ from "../components/FAQ";

export default function ServicesPage() {
  const navigate = useNavigate();

  const handleSelectService = (service: string) => {
    navigate("/contact", { state: { selectedService: service } });
  };

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
            <Briefcase className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              MERN Stack Freelance Services
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-display">
            Services &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-[#CCD6F6] to-[#64FFDA]">
              Deliverables
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From single-page dynamic interfaces to complete full-stack web applications with authentication, custom admin ERPs, and database architectures.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <FreelanceServices onSelectService={handleSelectService} />

      {/* Process Workflow */}
      <FreelanceProcess />

      {/* Trust & Guarantees */}
      <FiverrTrustBanner />

      {/* Buyer FAQs */}
      <FAQ />

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#112240] via-[#0A192F] to-[#112240] border border-[#64FFDA]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-[#64FFDA] uppercase tracking-widest block font-bold">
              Custom Requirements?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Need a custom scope or ongoing development?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light max-w-xl">
              Send your project specs for a detailed timeline and transparent price estimate.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-7 py-4 rounded-full bg-[#64FFDA] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all flex items-center gap-2 shadow-lg shadow-[#64FFDA]/20 shrink-0"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
