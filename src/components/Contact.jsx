import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { portfolioData } from "../data/portfolioData";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const contactLinks = [
  { icon: <FiMail size={18} />, label: "Email", value: portfolioData.personal.email, href: portfolioData.social.email },
  { icon: <FiGithub size={18} />, label: "GitHub", value: "github.com/Sritharan39", href: portfolioData.social.github },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/YOUR_PROFILE", href: portfolioData.social.linkedin },
];

const EMAILJS_SERVICE_ID = "service_sryqa5b";
const EMAILJS_TEMPLATE_ID = "template_nc37rst";
const EMAILJS_PUBLIC_KEY = "ZDl00oXiNV0a4n4yn";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateField = (name, value) => {
  const trimmed = value.trim();
  
  switch (name) {
    case "from_name":
      if (!trimmed) return "Name is required";
      if (trimmed.length < 2) return "Name must be at least 2 characters";
      if (trimmed.length > 50) return "Name must be less than 50 characters";
      return "";
    
    case "from_email":
      if (!trimmed) return "Email is required";
      if (!validateEmail(trimmed)) return "Please enter a valid email address";
      return "";
    
    case "subject":
      if (!trimmed) return "Subject is required";
      if (trimmed.length < 3) return "Subject must be at least 3 characters";
      if (trimmed.length > 100) return "Subject must be less than 100 characters";
      return "";
    
    case "message":
      if (!trimmed) return "Message is required";
      if (trimmed.length < 10) return "Message must be at least 10 characters";
      if (trimmed.length > 1000) return "Message must be less than 1000 characters";
      return "";
    
    default:
      return "";
  }
};

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ from_name: "", from_email: "", subject: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      newErrors[field] = validateField(field, form[field]);
    });
    setErrors(newErrors);
    
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
      setErrors({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
    setTimeout(() => setStatus(""), 5000);
  };

  const fields = [
    { name: "from_name", label: "Name", type: "text", placeholder: "Your Name" },
    { name: "from_email", label: "Email", type: "email", placeholder: "your@email.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
  ];

  return (
    <section id="contact" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="09" title="Get In Touch" />
        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Always open to discussing new opportunities, interesting projects, or just having a chat about tech and LIMS. Feel free to reach out — I will reply within 24 hours!
            </p>
            <div className="flex flex-col gap-4">
              {contactLinks.map((link, i) => (
                <motion.a key={i} href={link.href} target="_blank" rel="noreferrer"
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 card-glow"
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={{ backgroundColor: "var(--accent-glow)", borderColor: "var(--border-hover)", color: "var(--accent)" }}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: "var(--text-muted)" }}>{link.label}</p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-xl border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="text-xs font-mono mb-6 p-3 rounded-lg border" style={{ color: "#34D399", backgroundColor: "var(--accent-glow)", borderColor: "var(--border-hover)" }}>
                ✅ EmailJS is configured and ready! Your messages will be sent to your email.
              </p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>
                      {field.label}
                    </label>
                    <input 
                      type={field.type} 
                      name={field.name} 
                      value={form[field.name]} 
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-all duration-200"
                      style={{ 
                        backgroundColor: "var(--bg-secondary)", 
                        border: errors[field.name] ? "1px solid #F87171" : "1px solid var(--border)", 
                        color: "var(--text-primary)" 
                      }}
                      onFocus={(e) => e.target.style.borderColor = errors[field.name] ? "#F87171" : "var(--accent)"}
                      onBlur={(e) => e.target.style.borderColor = errors[field.name] ? "#F87171" : "var(--border)"}
                    />
                    {errors[field.name] && (
                      <p style={{ fontSize: "12px", color: "#F87171", marginTop: "4px", fontFamily: "monospace" }}>
                        ✗ {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>Message</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange}
                    placeholder="Your message..." 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none resize-none transition-all duration-200"
                    style={{ 
                      backgroundColor: "var(--bg-secondary)", 
                      border: errors.message ? "1px solid #F87171" : "1px solid var(--border)", 
                      color: "var(--text-primary)" 
                    }}
                    onFocus={(e) => e.target.style.borderColor = errors.message ? "#F87171" : "var(--accent)"}
                    onBlur={(e) => e.target.style.borderColor = errors.message ? "#F87171" : "var(--border)"}
                  />
                  {errors.message && (
                    <p style={{ fontSize: "12px", color: "#F87171", marginTop: "4px", fontFamily: "monospace" }}>
                      ✗ {errors.message}
                    </p>
                  )}
                </div>

                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-mono" style={{ color: "#34D399" }}>
                    <FiCheckCircle size={15} /> Message sent! I'll reply within 24 hours.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-mono" style={{ color: "#F87171" }}>
                    <FiAlertCircle size={15} /> 
                    {Object.values(errors).find(e => e) || "Something went wrong. Try again."}
                  </motion.div>
                )}

                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-white font-medium text-sm btn-primary disabled:opacity-60"
                >
                  {status === "sending"
                    ? <><FiLoader size={15} className="animate-spin" /> Sending...</>
                    : <><FiSend size={15} /> Send Message</>
                  }
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
