import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import InteractiveServices from "@/components/InteractiveServices";
import TransitionBand from "@/components/TransitionBand";
import Portfolio from "@/components/Portfolio";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diseñador Gráfico en Pereira | Oscar Rendón Visual",
  description:
    "Diseño gráfico profesional en Pereira con 30 años de experiencia en branding, identidad visual, diseño editorial, redes sociales, empaques y diseño web.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/",
  },
};

export default function Home() {
  return (
    <>
      {/* Header Navigation */}
      <Header />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* 1. Hero Principal */}
        <Hero />

        {/* 2. Servicios / Especialidades */}
        <InteractiveServices />

        {/* 2.5 Banda de Transición Editorial */}
        <TransitionBand />

        {/* 3. Bloque de Autoridad */}
        <Authority />

        {/* 4. Portafolio Visual de Proyectos */}
        <Portfolio />

        {/* 5. Casos de Estudio Destacados */}
        <Cases />

        {/* 6. Proceso de Trabajo / Metodología */}
        <Process />

        {/* 7. Sobre Mí / Biografía */}
        <About />

        {/* 8. Preguntas Frecuentes (FAQ) */}
        <Faq />

        {/* 9. Contacto y Formularios */}
        <Contact />
      </main>

      {/* Footer Profesional */}
      <Footer />
    </>
  );
}
