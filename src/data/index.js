/**
 * data/index.js
 * Single source of truth for all portfolio content.
 * Fill in real values — sections import from here.
 */

export const meta = {
  name:      "Sritharan",
  title:     "Software Developer",
  subtitle:  "LIMS Specialist · SampleManager · UST Global",
  location:  "Chennai, Tamil Nadu, India",
  email:     "your@email.com",         // TODO: replace
  github:    "https://github.com/Sritharan39",
  linkedin:  "https://linkedin.com/in/sritharan", // TODO: replace
  resume:    "/resume.pdf",            // TODO: add to /public
  available: true,
  bio: "Precision-driven software developer specializing in Laboratory Information Management Systems. I build systems where accuracy is non-negotiable — from sample tracking workflows to LIMS integrations that power scientific research.",
};

export const stats = [
  { value: "3+",  label: "Years Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "10+", label: "Systems Integrated" },
  { value: "UST", label: "Current Employer" },
];

export const skills = [
  {
    category: "LIMS & Domain",
    items: ["SampleManager LIMS", "SDMS Integration", "Lab Workflows", "Sample Tracking", "Audit Trail"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Data",
    items: ["Python", "SQL", "REST APIs", "Node.js"],
  },
  {
    category: "DevOps & Tooling",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Jira"],
  },
];

export const experiences = [
  {
    role:        "Software Developer",
    company:     "UST Global India",
    period:      "2022 — Present",
    type:        "Full-time",
    description: "Developing and maintaining SampleManager LIMS solutions for enterprise laboratory environments. Building custom workflows, integrations, and automation scripts that improve lab efficiency and data accuracy.",
    highlights: [
      "SampleManager LIMS customization",
      "SDMS & instrument integrations",
      "SQL report generation",
      "Lab workflow automation",
    ],
  },
];

export const projects = [
  {
    id:          "01",
    title:       "LIMS Workflow Engine",
    tags:        ["SampleManager", "Python", "SQL"],
    description: "Custom workflow engine for automating sample lifecycle management, reducing manual entry by 60% across multi-lab environments.",
    status:      "Production",
    year:        "2024",
    link:        null,
  },
  {
    id:          "02",
    title:       "SDMS Integration Layer",
    tags:        ["REST API", "Python", "LIMS"],
    description: "Bidirectional data sync between SampleManager LIMS and SDMS, enabling real-time instrument result ingestion with full audit trail.",
    status:      "Production",
    year:        "2023",
    link:        null,
  },
  {
    id:          "03",
    title:       "Lab Analytics Dashboard",
    tags:        ["React", "SQL", "Charts"],
    description: "Real-time laboratory KPI dashboard with sample turnaround time metrics, analyst performance tracking, and SLA breach alerts.",
    status:      "Production",
    year:        "2024",
    link:        null,
  },
  {
    id:          "04",
    title:       "Portfolio Website",
    tags:        ["Next.js", "Tailwind", "Framer Motion"],
    description: "This site — precision-engineered personal showcase with award-level design and full animation orchestration.",
    status:      "Live",
    year:        "2025",
    link:        "/",
  },
];

export const nav = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];
