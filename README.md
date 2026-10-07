# Landing CV — Camilo Hernández

Landing page bilingüe (español e inglés) de una sola página (scroll storytelling) que presenta el perfil de Camilo Hernández como Frontend Developer, pensada para reclutadores y equipos que contratan.

## Stack

- [Next.js](https://nextjs.org) 16.4.0 (App Router)
- React 19.3.0
- TypeScript 5
- Tailwind CSS 4 (integrado con `@tailwindcss/turbopack`, configurado en `next.config.ts`)
- Fuentes Archivo y Space Mono vía `next/font/google`
- [Resend](https://resend.com) para el envío de correos del formulario (llamada HTTP directa, sin SDK)

## Requisitos

- Node.js 20.9 o superior (lo exige Next 16). Se recomienda Node 24 LTS.
- npm

## Cómo correrlo

Instalar dependencias:

```bash
npm install
```

Servidor de desarrollo en [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

Build de producción (debe pasar antes de desplegar):

```bash
npm run build
```

Servir el build de producción:

```bash
npm run start
```

Lint con ESLint:

```bash
npm run lint
```

## Variables de entorno

Crear `.env.local` a partir de la plantilla:

```bash
cp .env.example .env.local
```

| Variable | Para qué sirve | Obligatoria |
| --- | --- | --- |
| `RESEND_API_KEY` | API key de Resend para enviar los mensajes del formulario. | En producción sí. En desarrollo no: sin ella el mensaje solo se registra en consola. |
| `CONTACT_TO_EMAIL` | Correo que recibe los mensajes del formulario. | En producción sí. |
| `CONTACT_FROM_EMAIL` | Remitente con dominio verificado en Resend. Si no se define o queda vacía, se usa `Landing CV <onboarding@resend.dev>`. | No |

## Estructura del proyecto

```
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx        # HTML raíz (lang dinámico), fuentes, metadata y hreflang; generateStaticParams para es/en
│   │   └── page.tsx          # Composición de la página: barra de progreso + selector de idioma + secciones
│   ├── globals.css           # Tokens de Tailwind (@theme), keyframes y clases de animación
│   └── api/contact/route.ts  # POST /api/contact: valida y envía el correo con Resend
├── components/
│   ├── Hero.tsx              # Sección 01: nombre, metadatos, línea tipeada y CTAs
│   ├── NameTiles.tsx         # Nombre del hero dividido en fichas por letra
│   ├── Sections.tsx          # Perfil, Stack, Experiencia, Proyectos, Educación y Contacto
│   ├── Timeline.tsx          # Línea de tiempo de experiencia que se dibuja con el scroll
│   ├── ContactForm.tsx       # Formulario de contacto (cliente)
│   ├── LanguageSwitch.tsx    # Selector ES/EN fijo arriba a la derecha
│   ├── ScrollProgress.tsx    # Barra de progreso de scroll fija arriba
│   ├── Reveal.tsx            # useInViewOnce + RevealSection (reveal al hacer scroll)
│   ├── CountUp.tsx           # Contador animado de las cifras del perfil
│   ├── TypedLine.tsx         # Línea de terminal que se escribe sola
│   └── Parallax.tsx          # Parallax suave del nombre del hero
└── i18n/
    ├── types.ts              # Tipo Dictionary: obliga a es y en a tener las mismas claves
    ├── es.ts                 # Textos en español
    ├── en.ts                 # Textos en inglés
    └── index.ts              # locales, getDictionary, localePath y datos de contacto compartidos
public/
└── perfil.webp               # Foto de perfil
```

La carpeta `Landing page con scroll storytelling/` contiene el prototipo HTML que sirve como referencia de diseño; no se importa ni se ejecuta.

## Editar el contenido

Todo el texto del CV vive en los diccionarios `src/i18n/es.ts` y `src/i18n/en.ts`: metadatos, hero, línea tipeada, perfil y cifras, grupos del stack, experiencia, proyectos, educación y formulario. Para cambiar el contenido se editan esos archivos, no los componentes. Actualiza ambos idiomas a la vez.

Los datos de contacto que no se traducen (teléfono, email, LinkedIn, GitHub, portafolio) están en `contacto` dentro de `src/i18n/index.ts`.

La foto de perfil es `public/perfil.webp`.

## Idiomas

| Idioma | Ruta |
| --- | --- |
| Español (por defecto) | `/` |
| Inglés | `/en` |

- Las rutas viven en `src/app/[lang]/`; `generateStaticParams` prerenderiza `es` y `en`.
- `next.config.ts` reescribe `/` hacia `/es` y redirige `/es` a `/` de forma permanente.
- `generateMetadata` define título, descripción, canonical y alternates `hreflang` por idioma.
- Los componentes (`Hero`, `Sections`, `ContactForm`, `Timeline`) reciben su porción del diccionario por props.
- `LanguageSwitch.tsx` enlaza entre idiomas con `scroll={false}`.

Para agregar o cambiar un texto:

1. Añadir o modificar la clave en `src/i18n/types.ts` (tipo `Dictionary`).
2. Completarla en `es.ts` y `en.ts`; TypeScript falla si falta alguna.
3. Pasar el valor al componente por props `t`.

## Animaciones

Solo animan `transform` y `opacity`, sin librerías externas.

| Animación | Dónde vive |
| --- | --- |
| Fichas del nombre: entrada tipo dominó, ola de "brisa" cada 6 s y giro al pasar el mouse | `NameTiles.tsx` + clases `.tile` / `.tile-face` en `globals.css` |
| Entrada escalonada de metadatos y CTAs del hero | clase `.enter` (`fade-up`) en `globals.css` |
| Línea de terminal que se escribe sola, con cursor parpadeante | `TypedLine.tsx` + clase `.caret` |
| Reveal al hacer scroll (una sola vez, con stagger por `--i`) | `Reveal.tsx` (IntersectionObserver) + clase `.reveal` |
| Contadores de cifras del perfil | `CountUp.tsx` (requestAnimationFrame) |
| Barra de progreso de lectura | `ScrollProgress.tsx` (`scaleX` en requestAnimationFrame) |
| Línea del timeline que se dibuja con el scroll | `Timeline.tsx` (`scaleY` en requestAnimationFrame) |
| Parallax del nombre del hero | `Parallax.tsx` |
| Cambio de texto del botón de envío | clase `.enter-label` en `globals.css` |

Con `prefers-reduced-motion: reduce` se conservan los fades pero se eliminan desplazamientos: las fichas y los reveals solo aparecen con opacidad, la brisa y el parallax se desactivan, el texto tipeado y los contadores muestran su valor final de inmediato y la línea del timeline aparece completa.

## Formulario de contacto

`ContactForm.tsx` envía los campos `name`, `email` y `message` como JSON a `POST /api/contact` (`src/app/api/contact/route.ts`). El endpoint:

1. Rechaza cuerpos que no sean JSON (400).
2. Si el campo oculto `website` (honeypot) viene lleno, responde éxito sin enviar nada.
3. Limpia y recorta los campos, y valida nombre, mensaje y formato de email (422 si fallan).
4. Si faltan `RESEND_API_KEY` o `CONTACT_TO_EMAIL`:
   - en desarrollo registra el mensaje en consola y responde `{ ok: true }`;
   - en producción responde 500.
5. Envía el correo con la API de Resend al `CONTACT_TO_EMAIL`, con `reply_to` igual al email del visitante. Si Resend falla responde 502.

No hay base de datos: los mensajes solo llegan por correo.

## Despliegue

En Vercel, plan Hobby (gratis):

1. Subir el repositorio a GitHub.
2. En Vercel, **Add New → Project** e importar el repositorio. Vercel detecta Next.js automáticamente.
3. En **Settings → Environment Variables** agregar `RESEND_API_KEY` y `CONTACT_TO_EMAIL` (y `CONTACT_FROM_EMAIL` si tienes un dominio verificado en Resend).
4. Desplegar. Cada push a la rama principal genera un nuevo despliegue.

Antes de desplegar, verificar localmente:

```bash
npm run build
```
