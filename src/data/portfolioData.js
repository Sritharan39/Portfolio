export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Software Developer",
    bio: "A passionate Software Developer specializing in LIMS implementation, SampleManager customization, and full-stack web development. Currently working at UST Global in the life sciences domain.",
    email: "your@email.com",
    location: "Chennai, Tamil Nadu, India",
    photo: "",
    resumeUrl: "/resume.pdf",
  },

  social: {
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://linkedin.com/in/YOUR_PROFILE",
    email: "mailto:your@email.com",
  },

  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "Your College Name",
      year: "2024",
      grade: "Your CGPA",
    },
  ],

  experience: [
    {
      role: "Software Developer",
      company: "UST Global",
      period: "2024 – Present",
      description: [
        "SampleManager LIMS implementation and configuration",
        "LES method development — 30+ methods across complexity levels 1–5",
        "Bio Repository 2.0 module exploration and knowledge sharing",
        "FRS-based configuration including automated calculations and certificate generation",
      ],
      tech: ["SampleManager LIMS", "VGL", "SQL", "C#", ".NET"],
    },
  ],

  skills: {
    frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "Express.js", "C#", ".NET"],
    database: ["PostgreSQL", "SQL Server", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "SSMS", "Postman", "JWT"],
    domain: ["SampleManager LIMS", "VGL Scripting", "LES Methods", "Bio Repository", "21 CFR Part 11"],
  },

  projects: [
    {
      name: "Thanjavur Kitchen — Mess Management System",
      desc: "Full-stack web app for managing a monthly dine-in mess facility. Features member management, meal plans, payment tracking, attendance, and SMS alerts via Twilio.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "Twilio"],
      liveUrl: "",
      githubUrl: "https://github.com/Sritharan39/MM-System",
      status: "In Progress",
      featured: true,
    },
    {
      name: "Daily Chronicle",
      desc: "A React-based daily life tracker with six tracking categories, mood tracker, persistent storage, and history view.",
      tech: ["React.js", "Tailwind CSS", "localStorage"],
      liveUrl: "",
      githubUrl: "",
      status: "Completed",
      featured: false,
    },
  ],

  certifications: [],

  awards: [],

  languages: [
    { language: "Tamil", proficiency: "Native" },
    { language: "English", proficiency: "Fluent" },
  ],

  featureFlags: {
    showBlog: false,
    showTestimonials: false,
    showGitHub: true,
    showOpenSource: false,
    showAwards: false,
    showCertifications: false,
  },
};