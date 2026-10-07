import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Contacto, Educacion, Experiencia, Perfil, Proyectos, Stack } from "@/components/Sections";
import { getDictionary, hasLocale } from "@/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <LanguageSwitch current={lang} label={t.langSwitch.label} />
      <Hero t={t.hero} />
      <Perfil t={t.perfil} />
      <Stack t={t.stack} />
      <Experiencia t={t.experiencia} />
      <Proyectos t={t.proyectos} />
      <Educacion t={t.educacion} />
      <Contacto t={t.contacto} />
    </main>
  );
}
