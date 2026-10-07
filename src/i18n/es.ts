import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Camilo Hernández — Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript para productos fintech. Bogotá, Colombia — disponible remoto.",
  },
  langSwitch: { label: "Idioma" },
  hero: {
    eyebrow: "01 / CV",
    role: ["FRONTEND", "DEVELOPER"],
    meta: [
      { label: "Bienvenido a", value: "mi portafolio" },
      { label: "[Stack]", value: "React · Next.js · TS" },
      { label: "[Sector]", value: "Fintech SaaS" },
      { label: "Bogotá, Colombia", value: "disponible remoto" },
    ],
    typedLine: "Frontend Developer — React / Next.js / TypeScript",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
  },
  perfil: {
    eyebrow: "02 / PERFIL",
    spoiler: "Spoiler alert:",
    frase: "“No siempre planeé ser desarrollador. La vida tenía otros planes.”",
    resumen:
      "Frontend Developer especializado en React, Next.js y TypeScript, con experiencia construyendo productos SaaS en el sector fintech. Crea interfaces reutilizables y de alto rendimiento aplicando React.memo, useMemo, lazy loading y code splitting. Integra agentes de IA en terminal (Claude Code, OpenCode) para acelerar ciclos de desarrollo.",
    stats: [
      { value: 2, suffix: "+", label: "Años de experiencia" },
      { value: 8, suffix: "+", label: "Proyectos entregados" },
    ],
    photoAlt: "Foto de Camilo Hernández",
    photoNote: "ese soy yo →",
  },
  stack: {
    eyebrow: "03 / STACK TÉCNICO",
    title: "Lo que sé usar",
    groups: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Material UI", "Hero UI"] },
      { title: "Herramientas", items: ["Git & GitHub", "Figma", "VS Code", "Terminal/Bash", "Playwright (E2E)", "SDD", "Scrum/Agile", "Photoshop", "Illustrator"] },
      { title: "Office", items: ["Google Workspace", "Microsoft 365"] },
      { title: "IA & LLMs", items: ["Claude Code", "OpenCode", "Codex", "Claude/ChatGPT", "Prompt Engineering"] },
      { title: "Idiomas", items: ["Español (nativo)", "Inglés (intermedio)"] },
    ],
  },
  experiencia: {
    eyebrow: "04 / EXPERIENCIA",
    title: "Dónde he construido cosas",
    items: [
      {
        periodo: "Jun 2026 – Presente",
        rol: "Desarrollador de Plataforma",
        empresa: "PMI (Fintech Pay In/Pay Out)",
        bullets: [
          "Plataforma de pagos para flujos pay in/pay out en entorno de alta disponibilidad.",
          "Módulos transaccionales con React/Next.js para cobro y dispersión.",
          "Integración de APIs de pagos y conciliación con backend.",
        ],
      },
      {
        periodo: "Jun 2025 – May 2026",
        rol: "Frontend Developer",
        empresa: "Kambia.la (SaaS Fintech)",
        bullets: [
          "Componentes reutilizables en React/Next.js/TypeScript.",
          "Optimización con React.memo, useMemo, lazy loading y code splitting.",
          "Integración de agentes de IA (Claude Code, OpenCode).",
        ],
      },
      {
        periodo: "2019 – 2022",
        rol: "Auxiliar de Sistemas y Desarrollo Web",
        empresa: "Constructora Jeinco",
        bullets: [
          "Administración de +100 cuentas Google Workspace con 2FA y backup automatizado.",
          "Sitio web corporativo en HTML/CSS/JS.",
        ],
        metrics: ["99.9% uptime", "+100 cuentas", "-30% incidentes", "+15% tráfico"],
      },
    ],
  },
  proyectos: {
    eyebrow: "05 / PROYECTOS",
    title: "Cosas que he construido",
    items: [
      {
        nombre: "Dashboard Kambia.la",
        desc: "Arquitectura de componentes y optimización de performance para plataforma fintech SaaS.",
        tags: ["React", "Next.js", "TypeScript", "Axios"],
      },
      {
        nombre: "Dashboard Back Office",
        desc: "Módulo de gestión interna con flujos de datos en tiempo real.",
        tags: ["React", "Next.js", "Material UI", "Axios"],
      },
      {
        nombre: "Havitat — Admin Conjuntos",
        desc: "Refactor y mejora de arquitectura del panel de administración de conjuntos residenciales.",
        tags: ["React", "Next.js", "TypeScript", "Context API"],
      },
    ],
  },
  educacion: {
    eyebrow: "06 / EDUCACIÓN",
    title: "Formación",
    items: [
      { titulo: "Ingeniería de Software", institucion: "Politécnico Grancolombiano", periodo: "2023 – (7.° sem/8)" },
      { titulo: "Frontend Developer", institucion: "Oracle ONE / Oracle Next Education", periodo: "2024 –" },
      { titulo: "MySQL", institucion: "Oracle ONE / Oracle Next Education", periodo: "2025" },
      { titulo: "Cloud Infrastructure", institucion: "Oracle ONE / Oracle Next Education", periodo: "2025" },
    ],
  },
  contacto: {
    eyebrow: "07 / CONTACTO",
    title: "Hablemos",
    intro: "¿Un proyecto fintech, un rol de frontend o simplemente quieres saludar? Escríbeme.",
    ubicacion: "Bogotá, Colombia — remoto",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      status: {
        idle: "Enviar mensaje",
        loading: "Enviando…",
        success: "¡Mensaje enviado!",
        error: "No se pudo enviar — reintentar",
      },
      srSuccess: "Mensaje enviado.",
      srError: "Error al enviar el mensaje.",
    },
    builtWith: "Construido con React + Next.js",
  },
};
