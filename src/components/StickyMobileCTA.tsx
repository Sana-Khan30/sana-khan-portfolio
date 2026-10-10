import { MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0A192F]/95 backdrop-blur-xl border-t border-white/10 md:hidden shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="https://wa.me/923226350189"
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-h-[44px] px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-emerald-900/30 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <Link
          to="/contact"
          className="flex-1 min-h-[44px] px-3 rounded-xl bg-[#64FFDA] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-[#64FFDA]/20 active:scale-95 transition-transform"
        >
          <span>Hire Me</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
