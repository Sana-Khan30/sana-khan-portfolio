import { Terminal, Github, Linkedin, Mail, ArrowUp, Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A192F] border-t border-white/10 text-slate-400 py-14 px-6 relative z-10 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="p-2 rounded-xl bg-[#64FFDA]/10 border border-[#64FFDA]/20 group-hover:border-[#64FFDA]/60 transition-colors">
                <Terminal className="w-5 h-5 text-[#64FFDA]" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-white font-display">
                  Sana Khan
                </span>
                <span className="block text-[10px] font-mono text-[#64FFDA] tracking-widest uppercase">
                  Full-Stack MERN Developer
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm max-w-md font-light leading-relaxed">
              Full Stack MERN Developer based in Karachi, Pakistan. Building production-ready web applications, e-commerce platforms with custom admin ERPs, and high-performance React interfaces for global clients.
            </p>
            <p className="text-xs font-mono text-[#64FFDA] italic">
              "From API to pixel — I own the full stack."
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Pages & Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#64FFDA] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#64FFDA] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[#64FFDA] transition-colors">
                  Skills & Tech Stack
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#64FFDA] transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#64FFDA] transition-colors">
                  Freelance Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#64FFDA] transition-colors">
                  Contact & Hire Me
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-[#64FFDA] transition-colors">
                  Printable Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="mailto:sanasamad592@gmail.com"
                className="flex items-center gap-2 hover:text-[#64FFDA] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#64FFDA]" />
                <span>sanasamad592@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923226350189"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 0322 6350189</span>
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Sana-Khan30"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#112240] text-slate-400 hover:text-white hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all border border-white/5 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sana-khan30/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#112240] text-slate-400 hover:text-white hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all border border-white/5 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p>© {new Date().getFullYear()} Sana Khan. All rights reserved. Available for freelance contracts.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#64FFDA] transition-colors font-mono min-h-[44px] px-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#64FFDA]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
