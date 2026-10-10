import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, CheckCircle2, ShieldAlert, Cpu, Sparkles, Layers, ArrowUpRight, Wrench } from "lucide-react";
import { useEffect } from "react";
import { Project } from "../data/projectsData";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A192F]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-[#112240] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A192F]/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#64FFDA] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#64FFDA]">
                {project.projectType}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#64FFDA] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
            {/* Header Title */}
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-mono font-bold uppercase tracking-widest mb-3">
                {project.badge}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mb-3">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Image Preview & Quick Action Bar */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video max-h-[380px] bg-[#0A192F]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-4 right-4 flex flex-wrap gap-2.5">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#64FFDA] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all flex items-center gap-1.5 shadow-lg shadow-[#64FFDA]/20 min-h-[44px]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#0A192F]/90 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0A192F] transition-all border border-white/15 flex items-center gap-1.5 min-h-[44px]"
                  >
                    {project.codeUrl.includes("github.com") ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4 text-[#64FFDA]" />
                    )}
                    <span>
                      {project.codeUrl.includes("github.com") ? "GitHub Repo" : "Open Hosted App"}
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0A192F]/80 border border-white/5 space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  Client Need / Problem
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {project.caseStudy.clientNeed}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#0A192F]/80 border border-[#64FFDA]/20 space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#64FFDA] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#64FFDA]" />
                  What I Built
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {project.caseStudy.whatIBuilt}
                </p>
              </div>
            </div>

            {/* Technical Challenges Solved */}
            <div className="p-6 rounded-2xl bg-[#0A192F]/60 border border-white/10 space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#CCD6F6] flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#64FFDA]" />
                Technical Challenges Solved
              </h3>
              <div className="space-y-3">
                {project.caseStudy.challengesSolved.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#112240]/60 border border-white/5">
                    <span className="text-[#64FFDA] font-mono text-sm shrink-0">0{idx + 1}.</span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer & Admin Features if available */}
            {(project.caseStudy.customerFeatures || project.caseStudy.adminFeatures) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.caseStudy.customerFeatures && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#0A192F]/50 border border-white/5 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                      Customer Experience Features
                    </h4>
                    <ul className="space-y-2">
                      {project.caseStudy.customerFeatures.map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.caseStudy.adminFeatures && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#0A192F]/50 border border-white/5 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                      Admin Panel & ERP Features
                    </h4>
                    <ul className="space-y-2">
                      {project.caseStudy.adminFeatures.map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack Breakdown Matrix */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#64FFDA]" />
                Full-Stack Architecture Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-[#0A192F]/60 border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-[#64FFDA] uppercase tracking-wider block">Frontend</span>
                  <div className="flex flex-wrap gap-1">
                    {project.caseStudy.stackBreakdown.frontend.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-[#112240] text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0A192F]/60 border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-[#CCD6F6] uppercase tracking-wider block">Backend</span>
                  <div className="flex flex-wrap gap-1">
                    {project.caseStudy.stackBreakdown.backend.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-[#112240] text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0A192F]/60 border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">Database & Auth</span>
                  <div className="flex flex-wrap gap-1">
                    {project.caseStudy.stackBreakdown.databaseAndAuth.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-[#112240] text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0A192F]/60 border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">Quality & Tests</span>
                  <div className="flex flex-wrap gap-1">
                    {project.caseStudy.stackBreakdown.devopsAndQuality.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-[#112240] text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-[#0A192F]/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
            <span className="text-xs text-slate-400 font-light">
              Want a similar MERN solution for your startup or store?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#64FFDA] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all text-center min-h-[44px] flex items-center justify-center"
              >
                Discuss Your Project
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-[#112240] text-slate-300 text-xs hover:bg-[#233554] transition-colors border border-white/10 min-h-[44px]"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
