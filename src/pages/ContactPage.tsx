import { motion } from "motion/react";
import { MessageSquare, Phone, Mail, Github, Linkedin, Sparkles, ShieldCheck } from "lucide-react";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";

export default function ContactPage() {
  const location = useLocation();
  const selectedService = (location.state as { selectedService?: string })?.selectedService || "";

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
            <MessageSquare className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Start Your Project
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-display">
            Contact &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-[#CCD6F6] to-[#64FFDA]">
              Hire Me
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Fill out the project scope form below or reach out directly on WhatsApp or Email for a fast reply within 2–4 hours.
          </p>
        </motion.div>
      </div>

      {/* Main Contact Form & Direct Channels */}
      <Contact initialService={selectedService} />
    </main>
  );
}
