import { motion } from "motion/react";
import Section from "./ui/Section";
import { skillsCategories } from "../data/skillsData";
import { User, MapPin, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, Target, Clock } from "lucide-react";
import myHeroImg from "../assets/hero-image.png";

export default function About() {
  return (
    <Section id="about" className="bg-[#112240]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Story: From Sales Discipline to Full-Stack Engineering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Profile Card / Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#64FFDA]/30 bg-[#0A192F] shadow-2xl p-2">
              <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-[#112240]">
                <img
                  src={myHeroImg}
                  alt="Sana Khan - Full Stack MERN Developer"
                  className="w-full h-full object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 bg-[#0A192F] space-y-2 text-center">
                <span className="text-xs font-mono text-[#64FFDA] uppercase tracking-widest block">
                  Full Stack MERN Developer
                </span>
                <h3 className="text-2xl font-bold text-white font-display">Sana Khan</h3>
                <p className="text-xs text-slate-400 font-light">
                  Karachi, Pakistan • Open to Global Freelance & Remote Contracts
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Human Story & Freelance Reliability */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20">
              <User className="w-4 h-4 text-[#64FFDA]" />
              <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
                About The Developer
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display leading-tight">
              Why Freelance Clients Rely On Me:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#CCD6F6]">
                Ownership & Communication
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                I am <strong className="text-white font-medium">Sana Khan</strong>, an independent full-stack MERN developer based in Karachi, Pakistan. My guiding principle is simple: <span className="text-[#64FFDA] font-mono font-medium">"From API to pixel — I own the full stack."</span>
              </p>
              <p>
                Before diving deeply into software engineering through rigorous MERN training at <strong className="text-white font-medium">SMIT</strong> and a Pre-Engineering diploma background, I worked for <strong className="text-white font-medium">1 year as a Banca Sales Officer at HBL (Habib Bank Limited)</strong>.
              </p>
              <p>
                In client banking, failure to communicate clearly, misunderstand client requirements, or miss a strict target isn't an option. I bring that same corporate discipline to freelance contracts: <strong className="text-white font-medium">I ask the right questions upfront, communicate proactively throughout the build, and deliver well-tested code that works as promised.</strong>
              </p>
            </div>

            {/* Core Client Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#0A192F]/60 border border-white/5 flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#64FFDA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display mb-0.5">Clear Communication</h4>
                  <p className="text-xs text-slate-400 font-light">Fluent in English & Urdu with prompt daily updates.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0A192F]/60 border border-white/5 flex items-start gap-3">
                <Target className="w-5 h-5 text-[#64FFDA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display mb-0.5">End-to-End Ownership</h4>
                  <p className="text-xs text-slate-400 font-light">No handoff friction between backend APIs and frontend UI.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grouped Skills Matrix */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
              Technical Skill Matrix
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              Grouped technical capabilities and verified production technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsCategories.map((cat, idx) => {
              const Icon = cat.categoryIcon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#64FFDA]/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="w-9 h-9 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#64FFDA] border border-[#64FFDA]/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white font-display">{cat.title}</h4>
                    </div>

                    <div className="space-y-2.5">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="space-y-0.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className={`font-medium ${skill.highlight ? "text-white font-bold" : "text-slate-300"}`}>
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono text-[#64FFDA] bg-[#64FFDA]/10 px-1.5 py-0.5 rounded">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 font-light leading-snug">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
