import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function DataVizPortfolio() {

  const skillsData = [
    { category: "Frontend", level: 85, color: "#9d4edd", skills: "React, JavaScript, Tailwind CSS, Framer Motion" },
    { category: "Backend", level: 80, color: "#c77dff", skills: "Node.js, Express.js, .NET, C#" },
    { category: "Database", level: 80, color: "#7209b7", skills: "PostgreSQL, SQL Server, MongoDB" },
    { category: "Domain", level: 85, color: "#00ff41", skills: "LIMS, SampleManager, Life Science, Enterprise" },
    { category: "DevOps", level: 70, color: "#00d9ff", skills: "Docker, AWS, Git, CI/CD" },
  ];

  const experienceData = [
    {
      year: "2024 - Present",
      company: "UST Global India",
      role: "Software Developer",
      domain: "Life Science / LIMS",
      achievements: ["SampleManager LIMS", "Full-Stack Development", "Enterprise Systems"],
    },
    {
      year: "2023 - 2024",
      company: "Previous Company",
      role: "Software Developer",
      domain: ".NET / Industrial Systems",
      achievements: ["Windows Desktop Apps", "Industrial Machine Vision", "System Architecture"],
    },
  ];

  const projectsData = [
    {
      name: "Thanjavur Kitchen",
      description: "Food ordering platform with real-time updates",
      tech: "MERN Stack, Real-time Data, Responsive Design",
      impact: "User-friendly, scalable",
    },
    {
      name: "Daily Chronicle",
      description: "Content management system with rich text editor",
      tech: "React, Node.js, MongoDB",
      impact: "Full-stack CMS solution",
    },
    {
      name: "LIMS RAG System",
      description: "AI-powered lab information retrieval system",
      tech: "React, Node.js, AI Integration",
      impact: "Domain-specific AI solution",
    },
    {
      name: "Portfolio Website",
      description: "Interactive multi-style portfolio (This!)",
      tech: "React, Vite, Framer Motion, Tailwind CSS",
      impact: "Innovative presentation",
    },
  ];

  const educationData = [
    {
      title: "Bachelor's Degree",
      institution: "Your College Name",
      year: "YYYY - YYYY",
      cgpa: "Your CGPA",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            Sritharan
          </h1>
          <p className="text-2xl md:text-4xl mb-4" style={{ color: "var(--accent)" }}>
            Full Stack Developer
          </p>
          <p className="text-lg md:text-xl mb-8" style={{ color: "var(--text-secondary)" }}>
            2+ Years | LIMS Specialist | Enterprise Systems
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 rounded-lg font-bold text-white"
            style={{ background: "linear-gradient(135deg, #9d4edd, #c77dff)" }}>
            Get In Touch
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                I am a full-stack software developer with 2+ years of professional experience. Specialized in LIMS systems and enterprise software development.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Currently at UST Global India, working on life science domain projects. Previously worked on .NET and industrial machine vision systems.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "15+" },
                { label: "Companies", value: "2" },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 rounded-lg" style={{ backgroundColor: "var(--bg-card)" }}>
                  <div style={{ color: "var(--accent)" }} className="text-sm font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold mt-2" style={{ color: "var(--text-primary)" }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills with Visualization */}
      <section className="py-20 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
            Technical Skills
          </h2>
          <div className="space-y-8">
            {skillsData.map((skill, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="flex justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                      {skill.category}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {skill.skills}
                    </p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-4 rounded-full" style={{ backgroundColor: "var(--bg-card)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: idx * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
            Experience
          </h2>
          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-lg border-l-4"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "#9d4edd" }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: "var(--accent)" }} className="font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span style={{ color: "var(--text-muted)" }} className="text-sm">
                    {exp.year}
                  </span>
                </div>
                <p style={{ color: "var(--text-secondary)" }} className="mb-3">
                  {exp.domain}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, aidx) => (
                    <span
                      key={aidx}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "rgba(157, 78, 221, 0.2)",
                        color: "#9d4edd",
                      }}>
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-6 rounded-lg"
                style={{ backgroundColor: "var(--bg-card)" }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {project.name}
                </h3>
                <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                  {project.description}
                </p>
                <p style={{ color: "var(--text-muted)" }} className="text-sm mb-3">
                  {project.tech}
                </p>
                <div className="inline-block px-3 py-1 rounded" style={{ backgroundColor: "rgba(0, 255, 65, 0.1)", color: "#00ff41" }}>
                  {project.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
            Education
          </h2>
          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-lg"
                style={{ backgroundColor: "var(--bg-card)" }}>
                <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {edu.title}
                </h3>
                <p style={{ color: "var(--accent)" }}>{edu.institution}</p>
                <div className="flex justify-between mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
                  <span>{edu.year}</span>
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
