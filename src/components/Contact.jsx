"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire EmailJS here
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Large ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/4 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label mb-4"
        >
          ◈ GET IN TOUCH
        </motion.div>

        {/* Big CTA headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-20"
        >
          Let&apos;s{" "}
          <span className="text-amber-500 text-glow">build</span>
          <br />
          something.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-emerald-400/30 bg-emerald-400/5 p-10 text-center"
              >
                <div className="text-emerald-400 text-4xl mb-4">✓</div>
                <div className="font-mono text-xs text-emerald-400 tracking-wider">MESSAGE_SENT: OK</div>
                <p className="text-[#a3a3a3] mt-3 text-sm">I&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "NAME", placeholder: "Your name", type: "text" },
                  { name: "email", label: "EMAIL", placeholder: "your@email.com", type: "email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block section-label mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-[#111111] border border-white/8 text-white font-body text-sm px-5 py-3.5 placeholder:text-[#525252] focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block section-label mb-2">MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#111111] border border-white/8 text-white font-body text-sm px-5 py-3.5 placeholder:text-[#525252] focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-amber-500 text-black font-mono font-bold text-xs tracking-widest py-4 hover:bg-amber-400 transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE →"}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right — links & info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col justify-between gap-12"
          >
            <div className="space-y-6">
              {[
                { label: "EMAIL", val: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { label: "GITHUB", val: "github.com/Sritharan39", href: personalInfo.github },
                { label: "LINKEDIN", val: "linkedin.com/in/sritharan", href: personalInfo.linkedin },
                { label: "LOCATION", val: personalInfo.location, href: null },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.5 }}
                  className="border-b border-white/5 pb-5"
                >
                  <div className="section-label mb-1">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a3a3a3] text-sm hover:text-amber-500 transition-colors font-light"
                    >
                      {item.val}
                    </a>
                  ) : (
                    <span className="text-[#a3a3a3] text-sm font-light">{item.val}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="border border-emerald-400/20 bg-emerald-400/5 px-6 py-4 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="font-mono text-[10px] text-emerald-400 tracking-wider">AVAILABLE FOR WORK</div>
                <div className="text-[#525252] text-xs mt-0.5">Open to full-time & contract opportunities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
