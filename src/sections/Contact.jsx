"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { meta } from "@/data/index";
import { stagger } from "@/lib/utils";

const LINKS = [
  { label: "EMAIL",    val: meta.email,                    href: `mailto:${meta.email}` },
  { label: "GITHUB",   val: "github.com/Sritharan39",      href: meta.github },
  { label: "LINKEDIN", val: "linkedin.com/in/sritharan",   href: meta.linkedin },
  { label: "LOCATION", val: meta.location,                  href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm]   = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })); }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire EmailJS — replace with your service/template/user IDs
    setTimeout(() => setStatus("sent"), 1200);
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-8xl mx-auto px-6 md:px-24">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="label mb-4">◈ GET IN TOUCH</motion.p>

        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22,1,0.36,1] }}
          className="font-display font-black leading-none mb-20"
          style={{ fontSize: "clamp(3rem,9vw,7rem)", color: "var(--text-primary)" }}>
          Let&apos;s{" "}
          <span className="text-glow" style={{ color: "var(--accent)" }}>build</span>
          <br />something.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}>
            {status === "sent" ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-12"
                style={{ border: "1px solid rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.04)" }}>
                <div className="text-4xl text-emerald-400 mb-4">✓</div>
                <p className="font-mono text-[11px] tracking-widest text-emerald-400 mb-2">MESSAGE_SENT: OK</p>
                <p className="text-sm font-light" style={{ color: "var(--text-secondary)" }}>I'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name",  label: "NAME",  type: "text",  placeholder: "Your name" },
                  { name: "email", label: "EMAIL", type: "email", placeholder: "your@email.com" },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block label mb-2">{f.label}</label>
                    <input type={f.type} name={f.name} required placeholder={f.placeholder}
                      value={form[f.name]} onChange={handleChange}
                      className="w-full text-sm font-light px-5 py-3.5 transition-colors outline-none"
                      style={{ background: "var(--bg-card)", border: "1px solid var(--border)",
                               color: "var(--text-primary)" }}
                      onFocus={e => e.target.style.borderColor = "var(--border-accent)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}  />
                  </div>
                ))}
                <div>
                  <label className="block label mb-2">MESSAGE</label>
                  <textarea name="message" required rows={5} placeholder="Tell me about the project..."
                    value={form.message} onChange={handleChange}
                    className="w-full text-sm font-light px-5 py-3.5 resize-none transition-colors outline-none"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)",
                             color: "var(--text-primary)" }}
                    onFocus={e => e.target.style.borderColor = "var(--border-accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"} />
                </div>
                <motion.button type="submit" disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="w-full font-mono font-bold text-[11px] tracking-widest py-4 transition-colors disabled:opacity-50"
                  style={{ background: "var(--accent)", color: "#0a0a0a" }}>
                  {status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE →"}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Links */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }} className="flex flex-col justify-between gap-10">
            <div className="space-y-5">
              {LINKS.map((item, i) => (
                <motion.div key={item.label}
                  initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: stagger(i, 0.07, 0.55) }}
                  className="pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                  <p className="label mb-1">{item.label}</p>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noreferrer"
                        className="text-sm font-light transition-colors underline-hover"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={e => e.target.style.color = "var(--accent)"}
                        onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}>
                        {item.val}
                      </a>
                    : <span className="text-sm font-light" style={{ color: "var(--text-secondary)" }}>{item.val}</span>
                  }
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}
              className="flex items-center gap-4 px-6 py-4"
              style={{ border: "1px solid rgba(52,211,153,0.2)", background: "rgba(52,211,153,0.04)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" style={{ animation: "pulse 2s infinite" }} />
              <div>
                <p className="font-mono text-[10px] tracking-wider text-emerald-400">AVAILABLE FOR WORK</p>
                <p className="text-xs mt-0.5 font-light" style={{ color: "var(--text-muted)" }}>Open to full-time & contract roles</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
