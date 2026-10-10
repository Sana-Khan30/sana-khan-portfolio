import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Code2, Server, Database, Sparkles, Wrench, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { skillsCategories } from "../data/skillsData";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoriesList = ["All", ...skillsCategories.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === "All"
      ? skillsCategories
      : skillsCategories.filter((c) => c.title === selectedCategory);

  return (
    <main className="pt-24 md:pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-4">
            <Cpu className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Technical Stack & Capabilities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-display">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-[#CCD6F6] to-[#64FFDA]">
              Tech Stack
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Production-proven technologies I use daily to engineer secure backends, robust database models, and responsive, fluid user interfaces.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border min-h-[40px] ${
                selectedCategory === cat
                  ? "bg-[#64FFDA] text-[#0A192F] border-[#64FFDA] font-bold shadow-md shadow-[#64FFDA]/25"
                  : "bg-[#112240]/60 text-slate-300 border-white/10 hover:border-[#64FFDA]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((cat, idx) => {
              const Icon = cat.categoryIcon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 hover:border-[#64FFDA]/30 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    {/* Card Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="w-11 h-11 rounded-2xl bg-[#0A192F] flex items-center justify-center text-[#64FFDA] border border-[#64FFDA]/20 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-white font-display">{cat.title}</h2>
                        <span className="text-[11px] font-mono text-[#64FFDA]">
                          {cat.skills.length} core tools
                        </span>
                      </div>
                    </div>

                    {/* Skill Items */}
                    <div className="space-y-3.5">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span
                              className={`font-medium ${
                                skill.highlight ? "text-white font-bold" : "text-slate-200"
                              }`}
                            >
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono text-[#64FFDA] bg-[#64FFDA]/10 px-2 py-0.5 rounded-full border border-[#64FFDA]/20 font-bold">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Engineering Principles & Architecture Strengths */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#112240]/70 border border-white/10 mb-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#64FFDA] uppercase tracking-widest block font-bold mb-1">
              Production Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              How I Architect Full-Stack Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-[#0A192F] border border-white/5 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#64FFDA]" />
              <h4 className="text-sm font-bold text-white font-display">Security & Auth</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                HttpOnly cookies, JWT rotation, bcrypt password hashing, Zod schema validation, and Helmet protection.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A192F] border border-white/5 space-y-2">
              <Database className="w-6 h-6 text-[#64FFDA]" />
              <h4 className="text-sm font-bold text-white font-display">Data Integrity</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Atomic MongoDB transactions, session locking for checkouts, indexed collections, and audit logs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A192F] border border-white/5 space-y-2">
              <Zap className="w-6 h-6 text-[#64FFDA]" />
              <h4 className="text-sm font-bold text-white font-display">Fast Client UI</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Code-split bundles, lazy-loaded Three.js canvases, responsive Tailwind layouts, and 60fps animations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A192F] border border-white/5 space-y-2">
              <Code2 className="w-6 h-6 text-[#64FFDA]" />
              <h4 className="text-sm font-bold text-white font-display">90+ Backend Tests</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Automated route testing, catalog validation, concurrent checkout testing, and admin permission tests.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Need a specific tech stack or architecture for your project?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full bg-[#112240] text-slate-200 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-all"
            >
              See Real Projects Built With This Stack
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90 text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#64FFDA]/20"
            >
              Discuss Your Tech Requirements
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
