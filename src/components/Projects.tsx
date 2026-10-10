import { motion } from "motion/react";
import Section from "./ui/Section";
import { ExternalLink, Github, Eye, BookOpen, Sparkles, Layers, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { projectsData, Project } from "../data/projectsData";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";

const secondaryCategories = ["All Other Work", "React & Cloud", "E-Commerce", "UI & Animation"] as const;
type SecondaryCategory = typeof secondaryCategories[number];

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [activeSecondaryCategory, setActiveSecondaryCategory] = useState<SecondaryCategory>("All Other Work");

  const featuredMernProjects = projectsData.filter((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  const filteredSecondary = secondaryProjects.filter((project) => {
    if (activeSecondaryCategory === "All Other Work") return true;
    return project.category === activeSecondaryCategory;
  });

  return (
    <Section id="projects" className="bg-[#0A192F] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-4"
          >
            <Layers className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Full-Stack & Client Proof
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-display"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-[#CCD6F6] to-[#64FFDA]">
              MERN Applications
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg font-light leading-relaxed"
          >
            Real production architectures: full-stack e-commerce stores, custom admin ERPs, authentication workflows, atomic stock locking, and automated test suites.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 1. PRIMARY FEATURED MERN PROJECTS (Grid 1 & 2) */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-24">
          {featuredMernProjects.map((project, index) => {
            const isClenora = project.id === "clenora-store";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl p-6 sm:p-10 lg:p-12 glass-panel border transition-all duration-300 relative overflow-hidden group ${
                  isClenora
                    ? "border-[#64FFDA]/40 bg-gradient-to-br from-[#112240] via-[#0A192F] to-[#112240] shadow-2xl shadow-[#64FFDA]/5"
                    : "border-white/10 hover:border-white/25 bg-[#112240]/60"
                }`}
              >
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Project Details */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3.5 py-1 rounded-full bg-[#64FFDA] text-[#0A192F] text-xs font-mono font-black uppercase tracking-wider">
                        {project.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                        {project.projectType}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Key Technical Bullets */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#64FFDA] block">
                        Technical Highlights:
                      </span>
                      {project.caseStudy.challengesSolved.slice(0, 3).map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-[#0A192F] text-slate-200 text-xs font-mono border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 rounded-xl bg-[#64FFDA] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all flex items-center gap-2 shadow-lg shadow-[#64FFDA]/20 min-h-[44px]"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="px-5 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2 min-h-[44px]"
                      >
                        <BookOpen className="w-4 h-4 text-[#64FFDA]" />
                        <span>Read Case Study</span>
                      </button>

                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-xl bg-[#0A192F] text-slate-400 hover:text-white transition-colors border border-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
                          title={project.codeUrl.includes("github.com") ? "View GitHub Repository" : "Open Hosted Application"}
                        >
                          {project.codeUrl.includes("github.com") ? (
                            <Github className="w-5 h-5" />
                          ) : (
                            <ExternalLink className="w-5 h-5 text-[#64FFDA]" />
                          )}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Image Showcase */}
                  <div className="lg:col-span-5 relative">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A192F] group-hover:border-[#64FFDA]/40 transition-all">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2. "MORE WORK" SECONDARY GRID */}
        {/* ========================================================================= */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 text-xs font-mono text-slate-400">
                <span>Frontend & Specialized Showcases</span>
              </div>
              <h3 className="text-3xl font-bold text-white font-display">
                More Selected Work & UI Projects
              </h3>
              <p className="text-slate-400 text-sm font-light mt-1">
                Explore additional frontend applications, real-time Firebase apps, and animated UI showcases.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {secondaryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSecondaryCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all min-h-[44px] ${
                    activeSecondaryCategory === cat
                      ? "bg-[#64FFDA] text-[#0A192F] shadow-md shadow-[#64FFDA]/20"
                      : "bg-[#112240] text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSecondary.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-[#64FFDA]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-[#0A192F]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0A192F]/80 text-[#64FFDA] border border-[#64FFDA]/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#64FFDA] transition-colors font-display mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2 mb-4">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-[#64FFDA] text-white hover:text-[#0A192F] text-[11px] font-bold uppercase tracking-wider transition-all text-center min-h-[40px] flex items-center justify-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#0A192F] text-slate-400 hover:text-white border border-white/5 min-h-[40px] min-w-[40px] flex items-center justify-center"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </Section>
  );
}
