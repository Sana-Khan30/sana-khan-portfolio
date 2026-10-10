import { motion } from "motion/react";
import Section from "./ui/Section";
import { servicesData, freelanceGuarantees } from "../data/servicesData";
import { Check, ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";

interface FreelanceServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function FreelanceServices({ onSelectService }: FreelanceServicesProps) {
  const handleServiceSelect = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="services" className="bg-[#0A192F] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#CCD6F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Freelance & Contract Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 font-display"
          >
            Engineered For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#CCD6F6]">
              Speed, Quality & Conversion
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg font-light leading-relaxed"
          >
            Whether you need a custom React application built from scratch, a Figma design turned into pixel-perfect code, or a fast-loading landing page, I deliver clean, production-ready results tailored for your business.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 glass-panel flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#64FFDA]/40 group ${
                  service.popular ? "border-[#64FFDA]/30 bg-[#112240]/80 shadow-xl shadow-[#64FFDA]/5" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#64FFDA] text-[#0A192F] text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#0A192F] flex items-center justify-center text-[#64FFDA] border border-white/10 group-hover:border-[#64FFDA]/40 group-hover:scale-105 transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#64FFDA] transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5 mb-8">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      Deliverables:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#64FFDA] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => handleServiceSelect(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#64FFDA] text-white hover:text-[#0A192F] font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-[#64FFDA]"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Client Guarantees Bar (Fiverr trust signals) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 glass-panel border border-white/10 bg-gradient-to-r from-[#112240] via-[#0A192F] to-[#112240]"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white font-display mb-2 flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#64FFDA]" />
              The Freelance Client Guarantee
            </h3>
            <p className="text-slate-400 text-sm font-light">
              Every contract is backed by strict quality benchmarks and clear communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freelanceGuarantees.map((guarantee, idx) => {
              const GIcon = guarantee.icon;
              return (
                <div key={idx} className="flex flex-col items-start p-4 rounded-xl bg-[#0A192F]/60 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] mb-3">
                    <GIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 font-display">{guarantee.title}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{guarantee.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
