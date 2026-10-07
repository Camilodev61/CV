@AGENTS.md

# Landing CV — Camilo Hernández

Landing page de una sola página (scroll storytelling) que presenta el perfil de Camilo como
Frontend Developer. La especificación de contenido vive en `Especificación Landing.md`.

## Fuente de verdad del diseño

- El esqueleto visual está en `Landing page con scroll storytelling/Landing Camilo Hernandez.dc.html`.
  Es un **prototipo de referencia**, no código de producción: no se importa ni se ejecuta
  (`support.js` e `image-slot.js` son runtime del prototipo). Se traduce a componentes React.
- Respetar su identidad: fondo crema `#F4EFE6`, tinta `#1A1815`, acento naranja `#FF5A24`,
  tipografías **Archivo** (titulares/cuerpo) y **Space Mono** (etiquetas, metadatos, terminal),
  numeración de secciones `01 / CV`, pills redondeadas, sección de contacto oscura.
- Los tokens de color/fuente están en `src/app/globals.css` (`@theme`). Usar las clases
  `bg-cream`, `text-ink`, `text-accent`, `text-muted`, `font-mono`, etc. — no hex sueltos.

## Stack y reglas generales

- **Next.js (App Router) + React + TypeScript.** Next 16: antes de usar una API de Next, revisar
  `node_modules/next/dist/docs/` (ver AGENTS.md).
- **Estilos solo con Tailwind CSS v4.** Nada de `style={{}}` inline salvo valores que cambian en
  runtime (p. ej. delay de stagger o transform calculado). CSS propio solo en `globals.css`
  para keyframes, easings y utilidades de animación.
- **Server Components por defecto.** `"use client"` solo en componentes con estado, efectos u
  observers (progreso de scroll, reveal, contadores, formulario, typing).
- **Contenido separado de la UI**: todo texto visible vive en los diccionarios `src/i18n/es.ts` y
  `src/i18n/en.ts` (tipados por `src/i18n/types.ts`). Los datos de contacto están en `src/i18n/index.ts`.
- Estructura: `src/app/[lang]` (layout y página por idioma), `src/app/api`, `src/components`,
  `src/i18n` (idiomas y contenido), `public` (imágenes).

## Idiomas (ES / EN)

- Español es el idioma por defecto y se sirve en `/` (rewrite a `/es` en `next.config.ts`; `/es`
  redirige a `/`). Inglés vive en `/en`. Ambas páginas son estáticas.
- Botón de idioma: `src/components/LanguageSwitch.tsx` (fijo arriba a la derecha).
- Todo cambio de texto se hace en **los dos** diccionarios a la vez.
- Mobile-first: los reclutadores revisan desde el celular. Probar a ~375px.
- Accesibilidad: `lang` según el idioma, contraste AA, foco visible, navegación por teclado, `alt` en
  imágenes, labels en el formulario (pueden ser `sr-only`).
- Idiomas de la UI: español (por defecto) e inglés.

## Animaciones (skills `emil-design-eng` y `animate`)

Usar esas skills al crear o revisar movimiento. Reglas no negociables:

- Solo animar `transform`, `opacity` (y `clip-path`). Nunca `width/height/top/margin`.
- Curvas propias: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` para entradas,
  `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` para movimiento en pantalla. Nunca `ease-in`.
- Duraciones UI ≤ 300ms (hover 150ms, press 160ms). Entradas de marketing (reveal, nombre del
  hero) pueden ser más largas.
- Reveals al hacer scroll se disparan **una sola vez** (IntersectionObserver), con stagger de
  30–80ms entre elementos.
- Botones y elementos presionables: `active:scale-[0.97]`.
- Hover con movimiento solo en dispositivos con hover (Tailwind v4 ya lo protege con
  `@media (hover: hover)`).
- Valores ligados al scroll (barra de progreso, línea del timeline, parallax) se escriben
  directo en `element.style.transform` dentro de `requestAnimationFrame`, sin `setState`.
- `prefers-reduced-motion`: menos movimiento, no cero — se conservan fades, se eliminan
  desplazamientos y parallax.
- No instalar librerías de animación si CSS/IntersectionObserver alcanzan.
- El nombre del hero usa "fichas" por letra (`NameTiles.tsx` + clases `.tile*` en `globals.css`):
  entrada tipo dominó, ola de "brisa" cada 6s y giro al hacer hover.

## Formulario de contacto

- `POST /api/contact` (Route Handler) valida y envía el mensaje por correo con **Resend**.
- Variables de entorno (ver `.env.example`): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`.
  Sin `RESEND_API_KEY` en desarrollo, el endpoint solo registra el mensaje en consola.
- No hay base de datos en esta fase. Si luego se necesita guardar/gestionar mensajes, se agrega
  Supabase en una spec aparte.

## Despliegue

- Vercel (plan Hobby, gratis). Conectar el repo de GitHub; configurar las variables de entorno
  en el dashboard de Vercel.

## Documentación

- Después de cambios que afecten lo documentado (componentes, dependencias, scripts, variables de
  entorno, API, animaciones, despliegue), ejecutar la skill `/update-readme`, que delega en el
  subagente `readme-writer`. Ambos son locales y están en `.gitignore`.

- Para modificar la landing usar el subagente `landing-updater`, que sigue la skill
  `/update-landing`. También son locales y están en `.gitignore`.

## Comandos

- `npm run dev` — servidor local
- `npm run build` — build de producción (debe pasar antes de desplegar)
- `npm run lint` — ESLint
