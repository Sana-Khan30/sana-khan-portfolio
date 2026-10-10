import { motion } from "motion/react";
import { Terminal, Home, ArrowRight, Sparkles, Layers, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <main className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden px-4">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#64FFDA]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10 space-y-6">
        {/* Terminal Header Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-16 h-16 rounded-3xl bg-[#64FFDA]/10 border border-[#64FFDA]/30 flex items-center justify-center mx-auto text-[#64FFDA] shadow-lg shadow-[#64FFDA]/20"
        >
          <Terminal className="w-8 h-8" />
        </motion.div>

        {/* 404 Badge & Code */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <span className="text-xs font-mono text-[#64FFDA] tracking-widest uppercase bg-[#64FFDA]/10 px-3 py-1 rounded-full border border-[#64FFDA]/20 inline-block font-bold">
            HTTP 404 — Route Not Found
          </span>

          <h1 className="text-6xl sm:text-8xl font-black text-white font-display tracking-tight text-glow">
            4<span className="text-[#64FFDA]">0</span>4
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-md mx-auto"
        >
          The page or endpoint <code className="text-[#64FFDA] bg-[#112240] px-2 py-0.5 rounded font-mono text-xs">{location.pathname}</code> does not exist or has been relocated.
        </motion.p>

        {/* Terminal Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 rounded-2xl bg-[#112240]/80 border border-white/10 text-left font-mono text-xs text-slate-300 shadow-xl space-y-1.5"
        >
          <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="text-[10px] text-slate-500 ml-2">bash: route_lookup.sh</span>
          </div>
          <p className="text-slate-400">
            $ GET <span className="text-rose-400">{location.pathname}</span>
          </p>
          <p className="text-rose-400">Error 404: Endpoint not registered in client router.</p>
          <p className="text-emerald-400">Suggested action: Return to root index or browse available routes.</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <Link
            to="/"
            className="px-6 py-3.5 rounded-full bg-[#64FFDA] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all flex items-center gap-2 shadow-lg shadow-[#64FFDA]/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/projects"
            className="px-6 py-3.5 rounded-full bg-[#112240] text-slate-200 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-[#233554] transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-[#64FFDA]" />
            <span>Browse Projects</span>
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-full bg-[#112240] text-slate-200 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-[#233554] transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#64FFDA]" />
            <span>Contact</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
