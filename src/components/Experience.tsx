import { motion } from "motion/react";
import Section from "./ui/Section";
import { Briefcase, Building2, Calendar, CheckCircle2, TrendingUp, Users } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experience" className="bg-[#0A192F] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-4"
          >
            <Briefcase className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Corporate Background
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 font-display"
          >
            Professional Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            How corporate banking discipline, client communication, and stakeholder management translate into exceptional freelance reliability.
          </motion.p>
        </div>

        {/* Experience Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pl-6 sm:pl-10 border-l-2 border-[#64FFDA]/30 space-y-12"
        >
          {/* Card Item */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#64FFDA] ring-4 ring-[#0A192F] shadow-[0_0_15px_rgba(100,255,218,0.6)]" />

            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#64FFDA]/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display flex items-center gap-2">
                    Banca Sales Officer
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 font-medium text-sm mt-1">
                    <Building2 className="w-4 h-4 text-[#64FFDA]" />
                    <span>HBL (Habib Bank Limited)</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1.5 rounded-full border border-[#64FFDA]/20 w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2024 – 2025 • 1 Year</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                Worked within Pakistan's premier financial institution, managing client relationships, financial solutions consulting, and stringent corporate operational standards. This experience instilled a high standard of professional communication, deadline adherence, and proactive problem solving that directly benefits technical client projects.
              </p>

              {/* Freelance Transferable Skills */}
              <div className="pt-4 border-t border-white/5 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#CCD6F6] block mb-2">
                  Transferable Freelance Strengths:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                    <span><strong>Accurate Requirement Gathering:</strong> Clarifying complex briefs before writing a single line of code.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                    <span><strong>Timely Milestone Communication:</strong> Keeping buyers updated proactively throughout the project.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                    <span><strong>Solution-Driven Mindset:</strong> Navigating technical roadblocks with composure and efficiency.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                    <span><strong>100% Accountability:</strong> Dedicated to delivering work that satisfies all contractual standards.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
