# Especificación — Landing Page de Hoja de Vida
**Proyecto:** Portafolio / CV interactivo de Camilo Hernández
**Alcance de esta spec:** Landing estático + formulario de contacto simple (sin backend/BD — eso va en una spec aparte)
**Destino de despliegue:** Vercel o Netlify (definir después)
**Audiencia:** Reclutadores, clientes potenciales, marca profesional personal

---

## 1. Objetivo

Crear un landing page de una sola página (single-page) que presente el perfil profesional de Camilo como
Frontend Developer especializado en React/Next.js/TypeScript en el sector fintech, con navegación tipo
**scroll storytelling**: el usuario avanza por secciones que se revelan con animación a medida que hace
scroll, transmitiendo una narrativa de "quién es → qué sabe → qué ha construido → cómo contactarlo".

## 2. Interactividad (scroll storytelling)

- Fade-in / slide-up de cada sección al entrar en viewport (Intersection Observer).
- Parallax sutil en el hero (no exagerado).
- Barra de progreso de scroll fija (indica en qué sección va el usuario).
- Números y stats (años de experiencia, % de mejora, uptime) animados con count-up al aparecer.
- Tags de stack tecnológico con hover interactivo (leve escala o glow).
- Timeline de experiencia laboral animada verticalmente (línea que se "dibuja" a medida que se hace scroll).
- Micro-interacciones en botones y links (hover states con transición suave).
- Sin sonido, sin autoplay de video.

## 3. Estructura de secciones (basada en el CV)

### 4.1 Hero
- Nombre: **Camilo Hernández**
- Rol: Frontend Developer — React / Next.js
- Subtítulo corto: disponible remoto, Bogotá, Colombia
- CTA primario: "Ver proyectos" (scroll a sección proyectos) / CTA secundario: "Contactar"
- Elemento visual: posible animación tipo terminal escribiendo su perfil letra por letra.

### 4.2 Perfil profesional
Texto base (adaptar a resumen breve, 3-4 líneas):
> Frontend Developer especializado en React, Next.js y TypeScript, con experiencia construyendo
> productos SaaS en el sector fintech. Crea interfaces reutilizables y de alto rendimiento aplicando
> React.memo, useMemo, lazy loading y code splitting. Integra agentes de IA en terminal (Claude Code,
> OpenCode) para acelerar ciclos de desarrollo.

### 4.3 Stack técnico (por categorías, como tags/pills interactivos)
- **Frontend:** React, Next.js, TypeScript, JavaScript, HTML/CSS, Tailwind CSS, Material UI, Hero UI
- **Herramientas:** Git & GitHub, Figma, VS Code, Terminal/Bash, Scrum/Agile, Photoshop, Illustrator
- **Office:** Google Workspace, Microsoft 365
- **IA & LLMs:** Claude Code, OpenCode, Claude/ChatGPT, Prompt Engineering
- **Idiomas:** Español (nativo), Inglés (intermedio, en progreso)

### 4.4 Experiencia laboral (timeline vertical animada)
1. **Desarrollador de Plataforma** — PMI (Fintech Pay In/Pay Out) — Jun 2026 – Presente
   - Desarrollo de plataforma de pagos para flujos de pay in/pay out en entorno fintech de alta disponibilidad.
   - Construcción de interfaces y módulos transaccionales con React/Next.js para cobro y dispersión.
   - Colaboración con backend para integración de APIs de pagos y conciliación.
2. **Frontend Developer** — Kambia.la (SaaS Fintech) — Jun 2025 – May 2026
   - Componentes reutilizables en React/Next.js/TypeScript.
   - Arquitectura de componentes que redujo duplicación de código entre dashboards.
   - Optimización de rendimiento (React.memo, useMemo, lazy loading, code splitting).
   - Interfaces accesibles y responsive; integración de APIs REST con Axios.
   - Integración de agentes de IA (Claude Code, OpenCode) reduciendo tiempo en tareas repetitivas.
3. **Auxiliar de Sistemas y Desarrollo Web** — Constructora Jeinco — 2019–2022
   - Administración de +100 cuentas Google Workspace, 99.9% uptime, 2FA y backup automatizado.
   - Gestión de Microsoft 365/Exchange.
   - Sitio web corporativo HTML/CSS/JS; -30% incidentes de correo, +15% tráfico web.

*(Sugerencia: destacar visualmente las métricas — 99.9%, +100, -30%, +15% — como stats animadas.)*

### 4.5 Proyectos destacados (cards interactivas)
- **Dashboard Kambia.la** — React · Next.js · TypeScript · Axios — Arquitectura de componentes y
  optimización de performance para plataforma fintech SaaS.
- **Dashboard Trabajadoras** — React · Next.js · Material UI · Axios — Módulo de gestión interna con
  flujos de datos en tiempo real.
- **Havitat — Admin Conjuntos** — React · Next.js · TypeScript · Context API — Refactor y mejora de
  arquitectura del panel de administración de conjuntos residenciales.

*(Si hay links a repos/demos disponibles, agregar botón "Ver código" / "Ver demo" en cada card.)*

### 4.6 Educación y certificaciones
- Ingeniería de Software — Politécnico Grancolombiano (6.° semestre de 8, 2023–)
- Frontend Developer — Oracle ONE / Oracle Next Education (2024–)
- MySQL — Oracle ONE / Oracle Next Education (2025)
- Cloud Infrastructure — Oracle ONE / Oracle Next Education (2025)

### 4.7 Contacto (formulario simple)
- Campos: Nombre, Email, Mensaje.
- Botón de envío con estado de loading/success/error (visual, sin backend aún — placeholder o mailto/
  servicio de terceros tipo Formspree/EmailJS para esta primera versión estática).
- Links directos: LinkedIn, GitHub, portafolio (camilodev61.github.io/mi-portafolio), email, teléfono.

### 4.8 Footer
- Copyright, links a redes, posible "Construido con React + Next.js" como detalle técnico/guiño.

## 4. Contenido de contacto (para el footer/hero/sección contacto)
- Teléfono: (+57) 321 697 6406
- Email: camilodev61@outlook.com
- Ubicación: Bogotá, Colombia (disponible remoto)
- LinkedIn: linkedin.com/in/camilohernandez
- GitHub: github.com/camilodev61
- Portafolio existente: camilodev61.github.io/mi-portafolio

## 5. Requisitos técnicos sugeridos
- Next.js + TypeScript + Tailwind CSS (coherente con su propio stack — refuerza credibilidad).
- Totalmente responsive (mobile-first, dado que muchos reclutadores revisan desde celular).
- Animaciones con Framer Motion o CSS puro + Intersection Observer (evaluar performance).
- Accesibilidad básica: contraste adecuado en modo oscuro, navegación por teclado, alt text en imágenes.
- Sin base de datos ni backend en esta fase — formulario de contacto usa servicio de terceros o mailto
  como solución temporal.

## 6. Fuera de alcance (para specs futuras)
- Persistencia de mensajes de contacto en base de datos.
- Panel de administración para gestionar mensajes.
- Definición final de hosting (Vercel vs Netlify) y dominio propio.
- Analytics / tracking de visitas.

---

*Documento generado a partir del CV de Camilo Hernández (PDF) y respuestas de brief. Listo para entregar
a Claude ("Cloud Design") como especificación de diseño y contenido del landing page.*
