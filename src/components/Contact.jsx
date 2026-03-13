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
    <section id="contact" className="py-24 bg-[#0F0F12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">// 09. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
              I am always open to discussing new opportunities, interesting projects,
              or just having a conversation about tech and LIMS. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 text-[#7C3AED] group-hover:bg-[#7C3AED]/20 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#52525B] mb-0.5">{link.label}</p>
                    <p className="text-[#A1A1AA] text-sm group-hover:text-[#FAFAFA] transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-xl bg-[#18181B] border border-[#27272A]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-xs font-mono text-[#52525B] tracking-widest uppercase mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === "email" ? "your@email.com" : "Your Name"}
                    className="w-full px-4 py-3 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#3F3F46] focus:outline-none focus:border-[#7C3AED] transition-colors text-sm"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-mono text-[#52525B] tracking-widest uppercase mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#3F3F46] focus:outline-none focus:border-[#7C3AED] transition-colors text-sm resize-none"
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono">
                  <FiCheckCircle size={15} /> Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm font-mono">
                  <FiAlertCircle size={15} /> Please fill in all fields.
                </div>
              )}

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#7C3AED] text-white font-medium text-sm hover:bg-[#6D28D9] transition-all duration-200 shadow-glow"
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
