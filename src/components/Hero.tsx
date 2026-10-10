import { motion } from "motion/react";
import Section from "./ui/Section";
import { ArrowRight, Code2, ExternalLink, ShieldCheck, Zap, Server, Database, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import HeroThreeCanvas from "./HeroThreeCanvas";
import myHeroImg from "../assets/hero-image.png";

export default function Hero() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-28 pb-16 md:pt-36 relative overflow-hidden">
      {/* Ambient background light gradients */}
      <div className="absolute inset-0 pointer-events-none atmosphere" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#64FFDA]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* Left Copy & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Tagline Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/30 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]"></span>
            </span>
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              From API to pixel — I own the full stack.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05] font-display">
            MERN Stack Developer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-[#CCD6F6] to-[#64FFDA] text-glow">
              Shipping Web Apps
            </span>
            <br />
            End to End.
          </h1>

          {/* Subline with 3 Concrete Deliverables */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-6 leading-relaxed font-light">
            I build scalable, high-converting digital products for startup founders, agencies, and businesses: <strong className="text-white font-medium">Custom MERN Web Applications</strong>, <strong className="text-white font-medium">E-Commerce Stores with Custom Admin ERPs</strong>, and <strong className="text-white font-medium">Pixel-Perfect Figma to React Conversions</strong>.
          </p>

          {/* True Trust Row */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 mb-8 text-xs font-mono text-slate-300 py-3 px-4 rounded-2xl bg-[#112240]/60 border border-white/5 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#64FFDA]" />
              <span>Full-Stack MERN</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#64FFDA]" />
              <span>Remote-Friendly (UTC+5)</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#64FFDA]" />
              <span>Clear Daily Communication</span>
            </div>
          </div>

          {/* Direct Platform & Showcase CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#64FFDA] text-[#0A192F] font-bold hover:bg-[#64FFDA]/90 transition-all duration-300 shadow-[0_0_25px_rgba(100,255,218,0.4)] flex items-center justify-center gap-2 text-xs uppercase tracking-wider hover:scale-[1.02] min-h-[44px]"
            >
              <span>View Case Studies & Code</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#112240] text-white font-medium hover:bg-[#233554] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider border border-white/10 hover:border-[#64FFDA]/40 min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4 text-[#64FFDA]" />
              <span>Hire Me / Get a Quote</span>
            </Link>

            <a
              href="https://wa.me/923226350189"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-4 rounded-full bg-emerald-950/60 text-emerald-300 hover:text-white hover:bg-emerald-900/80 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider border border-emerald-500/30 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </motion.div>

        {/* Right 3D Visual & Profile Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* 3D Interactive Canvas in background of card */}
            <div className="absolute inset-0 z-0 opacity-40">
              <HeroThreeCanvas />
            </div>

            {/* Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#64FFDA]/30 bg-[#112240]/85 backdrop-blur-md shadow-2xl z-10 group">
              <div className="relative aspect-[4/4.5] overflow-hidden">
                <img
                  src={myHeroImg}
                  alt="Sana - MERN Stack Developer"
                  className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
              </div>

              {/* Card Meta */}
              <div className="p-6 bg-[#112240]/95 border-t border-white/10 relative z-20">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-mono text-xs text-[#64FFDA] uppercase tracking-wider flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>MERN Stack Engineer</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 bg-[#0A192F] px-2.5 py-0.5 rounded-full border border-white/10">
                    Karachi, Pakistan
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Sana</h3>
                <p className="text-slate-400 text-xs font-light mt-1">
                  React 19 • Node.js/Express 5 • MongoDB Atlas • JWT • Cloudinary
                </p>
              </div>
            </div>

            {/* Floating Flagship Badge: CLENORA E-Commerce */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 z-20 glass-panel p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl border border-[#64FFDA]/30 hidden sm:flex"
            >
              <div className="w-9 h-9 rounded-xl bg-[#64FFDA]/15 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#64FFDA]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Flagship Client Work</p>
                <p className="text-[10px] text-slate-400 font-mono">CLENORA E-Commerce</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
