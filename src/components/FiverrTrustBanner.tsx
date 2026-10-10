import { motion } from "motion/react";
import { ShieldCheck, Zap, RefreshCw, MessageSquare, ExternalLink, CheckCircle } from "lucide-react";

export default function FiverrTrustBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#0A192F] border-y border-white/10 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#64FFDA]/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Title & Pitch */}
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1dbf73]/10 border border-[#1dbf73]/30 text-[#1dbf73] text-xs font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#1dbf73] animate-pulse" />
              Fiverr & Direct Client Ready
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Ready to Turn Your Vision Into High-Impact Code?
            </h3>
            <p className="text-slate-400 text-sm font-light">
              Secure milestone escrow, guaranteed delivery, and continuous updates throughout the development lifecycle.
            </p>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
            <div className="p-4 rounded-xl bg-[#0A192F]/80 border border-white/5 flex flex-col items-center text-center">
              <Zap className="w-5 h-5 text-[#64FFDA] mb-1.5" />
              <span className="text-xs font-bold text-white">Fast 24-48h</span>
              <span className="text-[10px] text-slate-400 font-light">Delivery Option</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0A192F]/80 border border-white/5 flex flex-col items-center text-center">
              <ShieldCheck className="w-5 h-5 text-[#CCD6F6] mb-1.5" />
              <span className="text-xs font-bold text-white">100% Secure</span>
              <span className="text-[10px] text-slate-400 font-light">Escrow Payments</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0A192F]/80 border border-white/5 flex flex-col items-center text-center">
              <RefreshCw className="w-5 h-5 text-yellow-400 mb-1.5" />
              <span className="text-xs font-bold text-white">Revisions</span>
              <span className="text-[10px] text-slate-400 font-light">Until Perfect</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0A192F]/80 border border-white/5 flex flex-col items-center text-center">
              <CheckCircle className="w-5 h-5 text-[#1dbf73] mb-1.5" />
              <span className="text-xs font-bold text-white">Clean Code</span>
              <span className="text-[10px] text-slate-400 font-light">Fully Documented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
