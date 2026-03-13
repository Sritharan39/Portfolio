import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const contactLinks = [
  { icon: <FiMail size={18} />, label: "Email", value: portfolioData.personal.email, href: portfolioData.social.email },
  { icon: <FiGithub size={18} />, label: "GitHub", value: "github.com/Sritharan39", href: portfolioData.social.github },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/YOUR_PROFILE", href: portfolioData.social.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus("error"); return; }
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section id="contact" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 09. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>Get In Touch</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Always open to discussing new opportunities, interesting projects, or just having a chat about tech and LIMS. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group"
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 24px var(--accent-glow)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors"
                    style={{ backgroundColor: "var(--accent-glow)", borderColor: "var(--border-hover)", color: "var(--accent)" }}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: "var(--text-muted)" }}>{link.label}</p>
                    <p className="text-sm transition-colors" style={{ color: "var(--text-secondary)" }}>{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-xl border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input type={field === "email" ? "email" : "text"} name={field} value={form[field]} onChange={handleChange}
                    placeholder={field === "email" ? "your@email.com" : "Your Name"}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-colors focus:outline-none"
                    style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Your message..." rows={5}
                  className="w-full px-4 py-3 rounded-lg text-sm transition-colors focus:outline-none resize-none"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>
              {status === "success" && (
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color: "#34D399" }}>
                  <FiCheckCircle size={15} /> Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color: "#F87171" }}>
                  <FiAlertCircle size={15} /> Please fill in all fields.
                </div>
              )}
              <button type="submit"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-white font-medium text-sm transition-all duration-200"
                style={{ backgroundColor: "var(--accent)" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <FiSend size={15} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
