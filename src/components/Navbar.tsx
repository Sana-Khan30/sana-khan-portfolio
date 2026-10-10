import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, FileText, Sparkles, Phone, ArrowRight } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3.5 bg-[#0A192F]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20"
          : "py-5 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Updated to Sana Khan */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64FFDA] rounded-xl p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-[#64FFDA]/10 border border-[#64FFDA]/20 group-hover:border-[#64FFDA]/60 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm">
            <Terminal className="w-5 h-5 text-[#64FFDA]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white font-display leading-none group-hover:text-[#64FFDA] transition-colors">
              Sana Khan
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] animate-pulse"></span>
              Full-Stack MERN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#112240]/60 border border-white/5 backdrop-blur-md shadow-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative ${
                  isActive
                    ? "text-[#0A192F] bg-[#64FFDA] shadow-md shadow-[#64FFDA]/25 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/resume"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#112240] text-slate-300 font-medium hover:text-white hover:bg-[#233554] transition-all border border-white/10 text-xs uppercase tracking-wider min-h-[40px]"
          >
            <FileText className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>Resume</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#64FFDA] text-[#0A192F] font-bold hover:bg-[#64FFDA]/90 transition-all duration-200 shadow-md shadow-[#64FFDA]/20 text-xs uppercase tracking-wider hover:scale-[1.03] min-h-[40px]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-[#112240] text-slate-200 hover:text-[#64FFDA] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-[#64FFDA]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0A192F]/98 border-b border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all min-h-[44px] ${
                      isActive
                        ? "bg-[#64FFDA]/15 text-[#64FFDA] border border-[#64FFDA]/30 font-bold"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 grid grid-cols-2 gap-2.5">
                <Link
                  to="/resume"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#112240] text-slate-200 text-xs font-bold uppercase tracking-wider border border-white/10 hover:bg-white/10 min-h-[44px]"
                >
                  <FileText className="w-4 h-4 text-[#64FFDA]" />
                  <span>Resume</span>
                </Link>

                <a
                  href="https://wa.me/923226350189"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-emerald-950/80 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30 min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#64FFDA] text-[#0A192F] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#64FFDA]/20 hover:bg-[#64FFDA]/90 transition-all min-h-[44px]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Project / Hire Me</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
