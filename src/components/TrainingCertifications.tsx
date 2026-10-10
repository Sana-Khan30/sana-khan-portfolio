import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "./ui/Section";
import { certificationsData, Certification } from "../data/certificationsData";
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Eye, X } from "lucide-react";
import smitCertImg from "../assets/smit-certificate.png";
import ciscoJsCertImg from "../assets/cisco-js-certificate.png";
import ciscoCssCertImg from "../assets/cisco-css-certificate.png";
import ciscoHtmlCertImg from "../assets/cisco-html-certificate.png";

export default function TrainingCertifications() {
  const [viewingCertificate, setViewingCertificate] = useState<Certification | null>(null);

  const getCertImage = (key?: string) => {
    switch (key) {
      case "smit":
        return smitCertImg;
      case "cisco-js":
        return ciscoJsCertImg;
      case "cisco-css":
        return ciscoCssCertImg;
      case "cisco-html":
        return ciscoHtmlCertImg;
      default:
        return null;
    }
  };

  return (
    <Section id="certifications" className="bg-[#0A192F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Training & Verified Credentials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-3"
          >
            Accredited Technical Certifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto"
          >
            Officially verified credentials from Cisco Networking Academy, OpenEDG JavaScript Institute, and Saylani IT Training Programme.
          </motion.p>
        </div>

        {/* Certifications Grid (4 items: 2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#64FFDA]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A192F] flex items-center justify-center text-[#64FFDA] border border-[#64FFDA]/20 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-full border border-[#64FFDA]/20 block font-bold">
                      {cert.issueDate}
                    </span>
                    {cert.certificateNo && (
                      <span className="text-[10px] font-mono text-slate-400 block mt-1">
                        {cert.certificateNo}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-1 group-hover:text-[#64FFDA] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-300 mb-3">{cert.institution}</p>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                  {cert.desc}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#0A192F] text-slate-300 text-[11px] font-mono border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Bottom */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                {cert.imageKey ? (
                  <button
                    onClick={() => setViewingCertificate(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-[#64FFDA] uppercase tracking-wider transition-colors min-h-[44px]"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#64FFDA]" />
                    <span>View Certificate</span>
                  </button>
                ) : (
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                )}

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#64FFDA] hover:text-white uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {viewingCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setViewingCertificate(null)}
              className="fixed inset-0 bg-[#0A192F]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#112240] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 p-5 sm:p-7 space-y-4 max-h-[92vh] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {viewingCertificate.title}
                  </h3>
                  <p className="text-xs font-mono text-[#64FFDA]">
                    {viewingCertificate.institution} • {viewingCertificate.issueDate}
                  </p>
                </div>
                <button
                  onClick={() => setViewingCertificate(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white flex-1 overflow-y-auto max-h-[65vh] flex items-center justify-center">
                {getCertImage(viewingCertificate.imageKey) && (
                  <img
                    src={getCertImage(viewingCertificate.imageKey)!}
                    alt={viewingCertificate.title}
                    className="w-full h-auto object-contain"
                  />
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={viewingCertificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#64FFDA] hover:underline"
                >
                  <span>Verify with Issuer</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setViewingCertificate(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#64FFDA] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-[#64FFDA]/90 transition-all min-h-[44px]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
