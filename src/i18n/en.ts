import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Camilo Hernández — Frontend Developer",
    description:
      "Frontend Developer specialized in React, Next.js and TypeScript for fintech products. Bogotá, Colombia — available remotely.",
  },
  langSwitch: { label: "Language" },
  hero: {
    eyebrow: "01 / CV",
    role: ["FRONTEND", "DEVELOPER"],
    meta: [
      { label: "Welcome to", value: "my portfolio" },
      { label: "[Stack]", value: "React · Next.js · TS" },
      { label: "[Industry]", value: "Fintech SaaS" },
      { label: "Bogotá, Colombia", value: "available remotely" },
    ],
    typedLine: "Frontend Developer — React / Next.js / TypeScript",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
  },
  perfil: {
    eyebrow: "02 / PROFILE",
    spoiler: "Spoiler alert:",
    frase: "“I didn’t always plan to be a developer. Life had other plans.”",
    resumen:
      "Frontend Developer specialized in React, Next.js and TypeScript, with experience building SaaS products in the fintech industry. Builds reusable, high-performance interfaces using React.memo, useMemo, lazy loading and code splitting. Integrates terminal AI agents (Claude Code, OpenCode) to speed up development cycles.",
    stats: [
      { value: 2, suffix: "+", label: "Years of experience" },
      { value: 8, suffix: "+", label: "Projects delivered" },
    ],
    photoAlt: "Photo of Camilo Hernández",
    photoNote: "that's me →",
  },
  stack: {
    eyebrow: "03 / TECH STACK",
    title: "What I work with",
    groups: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Material UI", "Hero UI"] },
      { title: "Tools", items: ["Git & GitHub", "Figma", "VS Code", "Terminal/Bash", "Playwright (E2E)", "SDD", "Scrum/Agile", "Photoshop", "Illustrator"] },
      { title: "Office", items: ["Google Workspace", "Microsoft 365"] },
      { title: "AI & LLMs", items: ["Claude Code", "OpenCode", "Codex", "Claude/ChatGPT", "Prompt Engineering"] },
      { title: "Languages", items: ["Spanish (native)", "English (intermediate)"] },
    ],
  },
  experiencia: {
    eyebrow: "04 / EXPERIENCE",
    title: "Where I've built things",
    items: [
      {
        periodo: "Jun 2026 – Present",
        rol: "Platform Developer",
        empresa: "PMI (Fintech Pay In/Pay Out)",
        bullets: [
          "Payments platform for pay-in/pay-out flows in a high-availability environment.",
          "Transactional modules with React/Next.js for collections and disbursements.",
          "Integration of payment and reconciliation APIs with the backend team.",
        ],
      },
      {
        periodo: "Jun 2025 – May 2026",
        rol: "Frontend Developer",
        empresa: "Kambia.la (SaaS Fintech)",
        bullets: [
          "Reusable components in React/Next.js/TypeScript.",
          "Optimization with React.memo, useMemo, lazy loading and code splitting.",
          "Integration of AI agents (Claude Code, OpenCode).",
        ],
      },
      {
        periodo: "2019 – 2022",
        rol: "IT Assistant & Web Developer",
        empresa: "Constructora Jeinco",
        bullets: [
          "Managed 100+ Google Workspace accounts with 2FA and automated backups.",
          "Corporate website in HTML/CSS/JS.",
        ],
        metrics: ["99.9% uptime", "+100 accounts", "-30% incidents", "+15% traffic"],
      },
    ],
  },
  proyectos: {
    eyebrow: "05 / PROJECTS",
    title: "Things I've built",
    items: [
      {
        nombre: "Kambia.la Dashboard",
        desc: "Component architecture and performance optimization for a fintech SaaS platform.",
        tags: ["React", "Next.js", "TypeScript", "Axios"],
      },
      {
        nombre: "Back Office Dashboard",
        desc: "Internal management module with real-time data flows.",
        tags: ["React", "Next.js", "Material UI", "Axios"],
      },
      {
        nombre: "Havitat — Residential Admin",
        desc: "Refactor and architecture improvements for a residential complex admin panel.",
        tags: ["React", "Next.js", "TypeScript", "Context API"],
      },
    ],
  },
  educacion: {
    eyebrow: "06 / EDUCATION",
    title: "Education",
    items: [
      { titulo: "Software Engineering", institucion: "Politécnico Grancolombiano", periodo: "2023 – (7th of 8 semesters)" },
      { titulo: "Frontend Developer", institucion: "Oracle ONE / Oracle Next Education", periodo: "2024 –" },
      { titulo: "MySQL", institucion: "Oracle ONE / Oracle Next Education", periodo: "2025" },
      { titulo: "Cloud Infrastructure", institucion: "Oracle ONE / Oracle Next Education", periodo: "2025" },
    ],
  },
  contacto: {
    eyebrow: "07 / CONTACT",
    title: "Let's talk",
    intro: "A fintech project, a frontend role, or just want to say hi? Drop me a line.",
    ubicacion: "Bogotá, Colombia — remote",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      status: {
        idle: "Send message",
        loading: "Sending…",
        success: "Message sent!",
        error: "Couldn't send — try again",
      },
      srSuccess: "Message sent.",
      srError: "There was an error sending the message.",
    },
    builtWith: "Built with React + Next.js",
  },
};
