import { motion } from "motion/react";
import Section from "./ui/Section";
import { Mail, Phone, Send, Loader2, MessageSquare, ExternalLink, Github, Linkedin, DollarSign, Clock, ShieldCheck } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

interface ContactProps {
  initialService?: string;
}

const projectOptions = [
  "Custom MERN Web Application",
  "E-Commerce Store with Admin ERP & COD/WhatsApp",
  "REST API + MongoDB Backend Architecture",
  "Figma to Pixel-Perfect React & Tailwind",
  "Animated / 3D Landing Page",
  "Bug Fixing & Performance Optimization",
  "Other / Custom Milestone Contract"
];

const budgetOptions = [
  "$100 – $300 (Small Milestone / Landing Page)",
  "$300 – $800 (Full-Stack MVP / Custom Store)",
  "$800+ (Comprehensive MERN Ecosystem)",
  "Flexible / To Be Discussed"
];

const timelineOptions = [
  "Urgent (Typical: 24 – 48 Hours depending on scope)",
  "Standard (Typical: 1 – 2 Weeks depending on scope)",
  "Flexible / Long-Term Development"
];

export default function Contact({ initialService }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(initialService || projectOptions[0]);
  const [selectedBudget, setSelectedBudget] = useState<string>(budgetOptions[1]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(timelineOptions[1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUB_KEY || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === "YOUR_SERVICE_ID") {
      Swal.fire({
        title: "Direct Contact Available",
        text: "Please note that you can reach me directly at sanasamad592@gmail.com, on WhatsApp (+92 322 6350189), or hire me securely through Fiverr/Upwork.",
        icon: "info",
        confirmButtonColor: "#64FFDA",
        background: "#112240",
        color: "#fff"
      });
      return;
    }

    setIsSending(true);

    try {
      const sendPromise = emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), 10000)
      );

      await Promise.race([sendPromise, timeoutPromise]);

      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for reaching out! I will review your requirements and respond within 24 hours.",
        icon: "success",
        confirmButtonColor: "#64FFDA",
        background: "#112240",
        color: "#fff"
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      let errorMessage = "Failed to send message. Please reach out directly at sanasamad592@gmail.com or on WhatsApp.";
      if (error instanceof Error && error.message === "Request timed out") {
        errorMessage = "Request timed out. Please check your internet connection or email directly.";
      } else if (typeof error === "object" && error !== null && "text" in error) {
        errorMessage = (error as { text: string }).text;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      Swal.fire({
        title: "Notice",
        text: errorMessage,
        icon: "error",
        confirmButtonColor: "#ef4444",
        background: "#112240",
        color: "#fff"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" className="bg-[#0A192F] relative overflow-hidden">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#64FFDA]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#CCD6F6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/20 mb-4"
          >
            <MessageSquare className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-xs font-mono font-bold text-[#64FFDA] tracking-widest uppercase">
              Start a Project
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 font-display"
          >
            Let's Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#CCD6F6]">
              Next MERN Application
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg font-light leading-relaxed"
          >
            Send your project brief below for a fast estimate, or connect directly through Fiverr, Upwork, WhatsApp, or email.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Channel Buttons */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  Direct Hire & Contact Channels
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  Choose your preferred collaboration platform:
                </p>
              </div>

              {/* Direct Hire Badges */}
              <div className="space-y-3">
                {/* Fiverr CTA */}
                <a
                  href="https://www.fiverr.com" // [TODO: Replace with exact Fiverr profile URL]
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#1dbf73]/10 border border-[#1dbf73]/30 hover:bg-[#1dbf73]/20 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1dbf73] text-black font-black flex items-center justify-center text-sm font-mono">
                      fi
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#1dbf73] transition-colors">
                        Hire on Fiverr
                      </h4>
                      <p className="text-[11px] text-slate-400 font-light">Secure escrow & milestone orders</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#1dbf73]" />
                </a>

                {/* Upwork CTA */}
                <a
                  href="https://www.upwork.com" // [TODO: Replace with exact Upwork profile URL]
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#14a800]/10 border border-[#14a800]/30 hover:bg-[#14a800]/20 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#14a800] text-white font-black flex items-center justify-center text-sm font-mono">
                      Up
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#14a800] transition-colors">
                        Hire on Upwork
                      </h4>
                      <p className="text-[11px] text-slate-400 font-light">Hourly or fixed-price contracts</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#14a800]" />
                </a>

                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/923226350189"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        WhatsApp Quick Chat
                      </h4>
                      <p className="text-[11px] text-slate-400 font-light">0322 6350189 (Instant reply)</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                </a>

                {/* Email Direct */}
                <a
                  href="mailto:sanasamad592@gmail.com"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#112240] border border-white/10 hover:border-[#64FFDA]/30 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-[#64FFDA] flex items-center justify-center border border-[#64FFDA]/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#64FFDA] transition-colors">
                        Direct Email
                      </h4>
                      <p className="text-[11px] text-slate-400 font-light">sanasamad592@gmail.com</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Developer Links */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-3">
                <a
                  href="https://github.com/Sana-Khan30"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#0A192F] text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono border border-white/10 min-h-[44px]"
                >
                  <Github className="w-4 h-4 text-[#64FFDA]" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sana-khan30/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#0A192F] text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono border border-white/10 min-h-[44px]"
                >
                  <Linkedin className="w-4 h-4 text-[#CCD6F6]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Right Project Brief Form */}
            <div className="lg:col-span-7">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Project Category */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Type *
                  </label>
                  <select
                    name="project_type"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#64FFDA] transition-all min-h-[44px]"
                  >
                    {projectOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#112240] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="user_name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name / Business *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#64FFDA] transition-all font-light min-h-[44px]"
                      placeholder="e.g. Alex"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#64FFDA] transition-all font-light min-h-[44px]"
                      placeholder="alex@example.com"
                    />
                  </div>
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-3 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#64FFDA] transition-all min-h-[44px]"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#112240] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={selectedTimeline}
                      onChange={(e) => setSelectedTimeline(e.target.value)}
                      className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-3 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#64FFDA] transition-all min-h-[44px]"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#112240] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Scope / Figma Link / Requirements *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-[#0A192F] border border-white/10 rounded-xl p-4 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#64FFDA] transition-all resize-none font-light"
                    placeholder="Tell me about your product requirements, desired features, or share a Figma link..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-[#64FFDA] text-[#0A192F] font-bold py-3.5 rounded-xl hover:bg-[#64FFDA]/90 transition-all shadow-lg shadow-[#64FFDA]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs min-h-[48px]"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
