export type Experiencia = {
  periodo: string;
  rol: string;
  empresa: string;
  bullets: string[];
  metrics?: string[];
};

export type FormStatus = "idle" | "loading" | "success" | "error";

export type FormCopy = {
  name: string;
  email: string;
  message: string;
  status: Record<FormStatus, string>;
  srSuccess: string;
  srError: string;
};

/** Every visible string of the landing. `es.ts` and `en.ts` must both satisfy it. */
export type Dictionary = {
  meta: { title: string; description: string };
  langSwitch: { label: string };
  hero: {
    eyebrow: string;
    role: [string, string];
    meta: { label: string; value: string }[];
    typedLine: string;
    ctaProjects: string;
    ctaContact: string;
  };
  perfil: {
    eyebrow: string;
    spoiler: string;
    frase: string;
    resumen: string;
    stats: { value: number; suffix: string; label: string }[];
    photoAlt: string;
    photoNote: string;
  };
  stack: { eyebrow: string; title: string; groups: { title: string; items: string[] }[] };
  experiencia: { eyebrow: string; title: string; items: Experiencia[] };
  proyectos: { eyebrow: string; title: string; items: { nombre: string; desc: string; tags: string[] }[] };
  educacion: { eyebrow: string; title: string; items: { titulo: string; institucion: string; periodo: string }[] };
  contacto: {
    eyebrow: string;
    title: string;
    intro: string;
    ubicacion: string;
    form: FormCopy;
    builtWith: string;
  };
};
