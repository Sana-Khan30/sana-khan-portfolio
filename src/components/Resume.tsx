import { Mail, Phone, MapPin, Github, Linkedin, Printer, ArrowLeft, ExternalLink, Award, BookOpen, Briefcase, Code2, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0A192F] py-16 px-4 md:px-8 relative overflow-hidden print:bg-white print:py-0 print:px-0">
      {/* Background Glows (hidden on print) */}
      <div className="absolute inset-0 pointer-events-none atmosphere print:hidden" />

      {/* Top Action Controls */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 relative z-10 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#64FFDA] hover:text-white font-mono font-medium transition-colors text-xs uppercase tracking-wider bg-[#112240] px-4 py-2.5 rounded-xl border border-white/10 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#64FFDA] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all shadow-lg shadow-[#64FFDA]/20 cursor-pointer min-h-[44px]"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>

          <a
            href="mailto:sanasamad592@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#112240] text-slate-200 hover:text-white font-medium text-xs uppercase tracking-wider transition-colors border border-white/10 min-h-[44px]"
          >
            <Mail className="w-4 h-4 text-[#64FFDA]" />
            <span>Email Me</span>
          </a>
        </div>
      </div>

      {/* Printable Resume Sheet */}
      <div className="max-w-[210mm] mx-auto bg-white text-slate-900 shadow-2xl rounded-2xl overflow-hidden relative z-10 print:shadow-none print:rounded-none print:max-w-full">
        {/* Resume Header */}
        <header className="bg-[#0A192F] text-white p-8 sm:p-10 border-b-4 border-[#64FFDA] print:bg-[#0A192F] print:text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-1 font-display">
                Sana Khan
              </h1>
              <p className="text-lg text-[#64FFDA] font-mono font-semibold tracking-wide">
                Full Stack MERN Developer
              </p>
              <p className="text-xs text-slate-400 mt-1 font-light max-w-md italic">
                "From API to pixel — I own the full stack."
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs text-slate-300 font-light border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <a
                href="mailto:sanasamad592@gmail.com"
                className="flex items-center gap-2 hover:text-[#64FFDA] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#64FFDA]" />
                <span>sanasamad592@gmail.com</span>
              </a>
              <a
                href="tel:03226350189"
                className="flex items-center gap-2 hover:text-[#64FFDA] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#64FFDA]" />
                <span>WhatsApp: 0322 6350189</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#64FFDA]" />
                <span>Karachi, Pakistan (Open to Remote / Freelance)</span>
              </div>
              <div className="flex gap-4 mt-1">
                <a
                  href="https://github.com/Sana-Khan30"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-300 hover:text-[#64FFDA] flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5 text-[#64FFDA]" />
                  <span>github.com/Sana-Khan30</span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/sana-khan30/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-300 hover:text-[#64FFDA] flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#CCD6F6]" />
                  <span>linkedin.com/in/sana-khan30/</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 sm:p-10">
          {/* Main Column */}
          <div className="md:col-span-8 space-y-6">
            {/* Executive Profile */}
            <section>
              <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-1.5 mb-2.5 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#0A192F]" />
                Professional Summary
              </h2>
              <p className="text-slate-700 text-xs leading-relaxed text-justify font-light">
                Independent Full-Stack MERN Developer based in Karachi, Pakistan, specializing in end-to-end web applications, e-commerce platforms with atomic stock reservation and custom admin ERP dashboards, secure JWT authentication architectures, and pixel-perfect Figma to React conversions. Possesses formal MERN training from Saylani Mass IT Training (SMIT) and a Diploma in IT (VTC). Bridges engineering precision with corporate client communication gained through a 1-year tenure as a Banca Sales Officer at HBL (Habib Bank Limited).
              </p>
            </section>

            {/* Corporate Experience */}
            <section>
              <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-1.5 mb-2.5 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#0A192F]" />
                Work Experience
              </h2>
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Banca Sales Officer
                  </h3>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    2024 – 2025 (1 Year)
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-700 mb-1.5">
                  HBL (Habib Bank Limited) • Karachi, Pakistan
                </p>
                <ul className="list-disc list-outside ml-4 text-[11px] text-slate-600 space-y-1 font-light">
                  <li>Managed client financial consultations, sales targets, and institutional compliance standards.</li>
                  <li>Cultivated disciplined stakeholder communication, structured requirement gathering, and proactive milestone tracking directly applied to freelance MERN client projects.</li>
                </ul>
              </div>
            </section>

            {/* Flagship Projects */}
            <section>
              <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-1.5 mb-2.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0A192F]" />
                Selected Production Projects
              </h2>

              <div className="space-y-3.5">
                {/* CLENORA */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      CLENORA – Cleaning Products E-Commerce (Production Client Project)
                    </h3>
                    <a
                      href="https://clenorastore.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>clenorastore.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-1 font-light">
                    Full-stack MERN store featuring COD checkout with server-side price verification and atomic stock locking ($inc), prefilled WhatsApp order summaries, and custom Admin Dashboard with 14-day sparkline and 90+ automated backend tests. Hosted on Hostinger.
                  </p>
                  <p className="text-[10px] font-mono text-slate-500">
                    <strong>Stack:</strong> React 19, Node.js, Express 5, MongoDB Atlas, JWT, Cloudinary, Zod, Helmet
                  </p>
                </div>

                {/* BlogVerse */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      BlogVerse – Full-Stack Editorial Platform (FemHack 2025/2026)
                    </h3>
                    <a
                      href="https://blog-verse-xslt.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>blog-verse-xslt.vercel.app</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-1 font-light">
                    MERN publishing platform built for the FemHack 2025/2026 hackathon. Features Cloudinary media pipelines, JWT auth, GSAP cinematic animations, and dynamic markdown writing.
                  </p>
                  <p className="text-[10px] font-mono text-slate-500">
                    <strong>Stack:</strong> React.js, Node.js, Express, MongoDB Atlas, Cloudinary, GSAP
                  </p>
                </div>

                {/* SupportFlow */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      SupportFlow – AI Customer Support Desk (FemHack 2025/2026)
                    </h3>
                    <a
                      href="https://supportflow-frontend-ikxu.onrender.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>supportflow.onrender.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-1 font-light">
                    Role-based ticket lifecycle system built for FemHack 2025/2026. Features SLA priority queues, agent triage, and real-time status transitions.
                  </p>
                  <p className="text-[10px] font-mono text-slate-500">
                    <strong>Stack:</strong> React 19, Node.js, Express, MongoDB, Role-Based Auth (RBAC)
                  </p>
                </div>

                {/* CV Master */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      CV Master – Interactive Resume Builder (FemHack 2025/2026)
                    </h3>
                    <a
                      href="https://cv-master-kappa.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>cv-master-kappa.vercel.app</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-1 font-light">
                    Reactive state-driven ATS resume generator built for FemHack 2025/2026 with live preview and client-side PDF compilation.
                  </p>
                  <p className="text-[10px] font-mono text-slate-500">
                    <strong>Stack:</strong> React.js, Tailwind CSS, Firebase, PDF Generator
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* Core Skills */}
            <section>
              <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-1.5 mb-2.5">
                Core Stack
              </h2>
              <div className="space-y-1.5">
                {[
                  "React.js (React 19)",
                  "Node.js & Express 5",
                  "MongoDB Atlas & Mongoose",
                  "JWT Auth & bcrypt",
                  "Cloudinary SDK",
                  "Tailwind CSS",
                  "JavaScript (ES6+)",
                  "GSAP & Framer Motion",
                  "Three.js / Canvas",
                  "Zod & Helmet Security",
                  "Firebase (Firestore/Auth)",
                  "Git & GitHub"
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-50 px-2 py-1 rounded text-[11px] font-medium text-slate-700 border-l-2 border-[#0A192F] flex items-center justify-between"
                  >
                    <span>{skill}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-1.5 mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#0A192F]" />
                Education
              </h2>
              <div className="space-y-2.5 text-xs">
                <div>
                  <h3 className="font-bold text-slate-800 text-[11px]">Graduation (Pre-Engineering)</h3>
                  <p className="text-[10px] text-slate-500">University Degree in Process • Present</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-[11px]">Intermediate (Pre-Engineering)</h3>
                  <p className="text-[10px] text-slate-600">Board of Intermediate Education Karachi (2022)</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-[11px]">Matriculation (Computer Science)</h3>
                  <p className="text-[10px] text-slate-600">Board of Secondary Education Karachi (2020)</p>
                </div>
              </div>
            </section>

            {/* Training & Certifications */}
            <section>
              <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-1.5 mb-2.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#0A192F]" />
                Certifications
              </h2>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-800 text-[11px]">Web & Mobile App Development (Batch-15)</h3>
                  <p className="text-[10px] text-slate-600">Saylani IT Training Programme (SMIT)</p>
                  <p className="text-[9px] font-mono text-slate-500">No: SMIT/2024/WMAD/B15/347005 (18 Months)</p>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-800 text-[11px]">JavaScript Essentials 1</h3>
                  <p className="text-[10px] text-slate-600">Cisco Networking Academy & OpenEDG</p>
                  <p className="text-[9px] font-mono text-slate-500">Issued: Dec 31, 2025 • Cisco Verified</p>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-800 text-[11px]">CSS Essentials</h3>
                  <p className="text-[10px] text-slate-600">Cisco Networking Academy & JS Institute</p>
                  <p className="text-[9px] font-mono text-slate-500">Issued: Dec 31, 2025 • Cisco Verified</p>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-800 text-[11px]">HTML Essentials</h3>
                  <p className="text-[10px] text-slate-600">Cisco Networking Academy</p>
                  <p className="text-[9px] font-mono text-slate-500">Issued: Nov 09, 2025 • Cisco Verified</p>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-800 text-[11px]">Diploma in IT (DIT)</h3>
                  <p className="text-[10px] text-slate-600">VTC – Sindh Board of Technical Education</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b-2 border-[#64FFDA] pb-1.5 mb-2.5">
                Languages
              </h2>
              <div className="flex gap-2">
                <span className="bg-[#0A192F] text-white px-2 py-0.5 rounded text-[11px] font-medium">
                  English (Professional)
                </span>
                <span className="bg-[#0A192F] text-white px-2 py-0.5 rounded text-[11px] font-medium">
                  Urdu (Native)
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
