import { motion } from "motion/react";
import Section from "./ui/Section";
import { freelanceProcess } from "../data/freelanceProcess";
import { Workflow, ArrowRight } from "lucide-react";

export default function FreelanceProcess() {
  return (
    <Section id="process" className="bg-[#112240]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCD6F6]/10 border border-[#CCD6F6]/20 mb-4"
          >
            <Workflow className="w-4 h-4 text-[#CCD6F6]" />
            <span className="text-xs font-mono font-bold text-[#CCD6F6] tracking-widest uppercase">
              How We Work Together
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 font-display"
          >
            A Transparent,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#CCD6F6]">
              5-Step Delivery Workflow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg font-light leading-relaxed"
          >
            No surprises or communication gaps. From kickoff to final production deployment, here is the structured process behind every successful project.
          </motion.p>
        </div>

        {/* Process Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {freelanceProcess.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col justify-between p-6 rounded-2xl glass-panel hover:border-[#64FFDA]/30 transition-all duration-300 group"
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-[#64FFDA]/40 group-hover:text-[#64FFDA] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0A192F] flex items-center justify-center text-[#64FFDA] border border-white/5 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-[#64FFDA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Outputs:
                  </span>
                  {item.deliverables.map((deliv, idx) => (
                    <div key={idx} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <span className="text-[#64FFDA] text-xs">✔</span>
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#64FFDA] text-[#0A192F] font-bold text-sm uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all shadow-[0_0_25px_rgba(100,255,218,0.3)] hover:scale-105"
          >
            <span>Have a Project in Mind? Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
