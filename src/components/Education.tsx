import { motion } from "motion/react";
import Section from "./ui/Section";
import { GraduationCap, Award, BookOpen, CheckCircle, Code2 } from "lucide-react";

const educationItems = [
  {
    degree: "Graduation (Pre-Engineering)",
    institution: "University Degree in Process",
    period: "Present",
    desc: "Analytical foundations, mathematical modeling, and engineering problem-solving methodologies.",
    icon: GraduationCap,
    badgeColor: "text-[#64FFDA] bg-[#64FFDA]/10 border-[#64FFDA]/20"
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Board of Intermediate Education Karachi",
    period: "2022",
    desc: "Rigorous focus on advanced mathematics, physics, and computational thinking.",
    icon: BookOpen,
    badgeColor: "text-[#CCD6F6] bg-[#CCD6F6]/10 border-[#CCD6F6]/20"
  },
  {
    degree: "Matriculation (Computer Science)",
    institution: "Board of Secondary Education Karachi",
    period: "2020",
    desc: "Core foundations of computer systems, algorithmic reasoning, and information technology.",
    icon: BookOpen,
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20"
  }
];

const certifications = [
  {
    title: "Web and Mobile App Development (Batch-15)",
    institution: "Saylani IT Training Programme (SMIT)",
    period: "Dec 2024 – May 2026 (18 Months)",
    desc: "18-month intensive training program (No: SMIT/2024/WMAD/B15/347005) covering React.js, Node.js, Express, MongoDB Atlas, REST APIs, and full-stack web/mobile architectures.",
    icon: Code2,
    badge: "Verified SMIT"
  },
  {
    title: "JavaScript Essentials 1",
    institution: "Cisco Networking Academy & OpenEDG JS Institute",
    period: "Dec 31, 2025",
    desc: "Credential covering core JavaScript syntax, algorithmic problem solving, functions, scope, exception handling, and data types.",
    icon: Award,
    badge: "Cisco Verified"
  },
  {
    title: "CSS Essentials",
    institution: "Cisco Networking Academy & JS Institute",
    period: "Dec 31, 2025",
    desc: "Mastery of modern responsive layouts, CSS Grid, Flexbox, transitions, keyframe animations, and web accessibility.",
    icon: Award,
    badge: "Cisco Verified"
  },
  {
    title: "Diploma in Information Technology (DIT)",
    institution: "Vocational Training Centre (VTC) – Sindh Board of Technical Education",
    period: "Completed",
    desc: "Hardware, software applications, network basics, web fundamentals, and database system administration.",
    icon: Award,
    badge: "SBTE Certified"
  }
];

export default function Education() {
  return (
    <Section id="education" className="bg-[#112240]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] border border-[#64FFDA]/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">Academic Background</h2>
                <p className="text-xs font-mono text-slate-400">Engineering & Computer Science</p>
              </div>
            </div>

            <div className="space-y-6 relative border-l-2 border-white/10 ml-4 pl-6 sm:pl-8">
              {educationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative group">
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0A192F] border-2 border-[#64FFDA] group-hover:bg-[#64FFDA] transition-colors" />

                    <div className="glass-panel p-5 rounded-xl border border-white/5 group-hover:border-white/20 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-white font-display">
                          {item.degree}
                        </h3>
                        <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${item.badgeColor}`}>
                          {item.period}
                        </span>
                      </div>

                      <p className="text-slate-300 text-xs font-medium mb-2">{item.institution}</p>
                      <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#CCD6F6]/10 flex items-center justify-center text-[#CCD6F6] border border-[#CCD6F6]/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">Technical Certifications</h2>
                <p className="text-xs font-mono text-slate-400">Accredited Professional Programs</p>
              </div>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#64FFDA]/30 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-xl bg-[#0A192F] text-[#64FFDA] group-hover:bg-[#64FFDA]/15 transition-colors shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-[#64FFDA] transition-colors font-display">
                            {cert.title}
                          </h3>
                          <span className="text-[11px] font-mono text-[#64FFDA] bg-[#64FFDA]/10 px-2.5 py-0.5 rounded border border-[#64FFDA]/20">
                            {cert.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-medium">{cert.institution} • {cert.period}</p>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">{cert.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
