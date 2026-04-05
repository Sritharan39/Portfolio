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
  roles: [
    "Software Developer",
    "LIMS Specialist",
    "SampleManager Expert",
    "Lab Systems Engineer",
    "Frontend Developer",
  ],
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

export const about = {
  intro: {
    greeting: "Hey, I'm Sritharan",
    tagline:  "I build lab systems that scientists trust.",
    body:     "Software Developer at UST Global India with 3+ years specializing in SampleManager LIMS. I turn complex laboratory workflows into precise, auditable, and efficient software solutions.",
  },

  career: [
    { year: "2022", event: "Joined UST Global India as Software Developer" },
    { year: "2022", event: "First SampleManager LIMS project delivered" },
    { year: "2023", event: "Led SDMS integration for enterprise lab client" },
    { year: "2024", event: "Built Lab Analytics Dashboard used across 3 sites" },
    { year: "2025", event: "Working toward band promotion — Mid 2026" },
  ],

  quotes: [
    { text: "Precision is not a skill. It is a habit.", author: "— Lab Philosophy" },
    { text: "Good code is its own best documentation.", author: "— Steve McConnell" },
    { text: "First, solve the problem. Then, write the code.", author: "— John Johnson" },
    { text: "Make it work, make it right, make it fast.", author: "— Kent Beck" },
    { text: "Simplicity is the soul of efficiency.", author: "— Austin Freeman" },
  ],

  skillsSnapshot: [
    { label: "SampleManager LIMS", level: 90 },
    { label: "Python",             level: 78 },
    { label: "React.js",           level: 82 },
    { label: "SQL",                level: 85 },
    { label: "REST APIs",          level: 75 },
  ],

  values: [
    { icon: "◈", title: "Precision",    desc: "Every data point matters. I build systems that don't lose information." },
    { icon: "⬡", title: "Reliability",  desc: "Labs depend on uptime. I write code that works when it has to." },
    { icon: "△", title: "Clarity",      desc: "Complex logic, simple interfaces. Scientists aren't engineers." },
    { icon: "○", title: "Ownership",    desc: "I see problems through to the end, not just my part of them." },
  ],

  highlights: [
    { value: "3+",   label: "Years in LIMS",        suffix: "" },
    { value: "20+",  label: "Projects Delivered",   suffix: "" },
    { value: "10+",  label: "Systems Integrated",   suffix: "" },
    { value: "60",   label: "Manual Entry Reduced",  suffix: "%" },
    { value: "3",    label: "Lab Sites Served",      suffix: "" },
    { value: "2026", label: "Promotion Target",      suffix: "" },
  ],
};
