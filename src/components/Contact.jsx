import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 09. Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              I am always open to discussing new opportunities, interesting projects,
              or just having a conversation about tech and LIMS. Feel free to reach out!
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={portfolioData.social.email}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3B82F6]">✉</span>
                </div>
                <div>
                  <p className="text-xs font-mono text-[#94A3B8] mb-1">Email</p>
                  <p className="text-[#F0F4FF] text-sm group-hover:text-[#3B82F6] transition-colors">{portfolioData.personal.email}</p>
                </div>
              </a>

              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3B82F6]">⌥</span>
                </div>
                <div>
                  <p className="text-xs font-mono text-[#94A3B8] mb-1">GitHub</p>
                  <p className="text-[#F0F4FF] text-sm group-hover:text-[#3B82F6] transition-colors">github.com/Sritharan39</p>
                </div>
              </a>

              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3B82F6]">in</span>
                </div>
                <div>
                  <p className="text-xs font-mono text-[#94A3B8] mb-1">LinkedIn</p>
                  <p className="text-[#F0F4FF] text-sm group-hover:text-[#3B82F6] transition-colors">linkedin.com/in/YOUR_PROFILE</p>
                </div>
              </a>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-[#131D35] border border-[#1E2D4A]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-mono text-[#94A3B8] tracking-widest uppercase mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#1E2D4A] text-[#F0F4FF] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#94A3B8] tracking-widest uppercase mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#1E2D4A] text-[#F0F4FF] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#94A3B8] tracking-widest uppercase mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#1E2D4A] text-[#F0F4FF] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors text-sm resize-none"
                />
              </div>

              {status === "success" && (
                <p className="text-green-400 text-sm font-mono">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm font-mono">Please fill in all fields.</p>
              )}

              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-[#3B82F6] text-white font-medium text-sm hover:bg-[#2563EB] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
