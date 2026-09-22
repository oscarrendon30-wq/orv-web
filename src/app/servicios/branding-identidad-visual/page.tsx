import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandingIdentidadVisualClient from "./BrandingIdentidadVisualClient";

export const metadata: Metadata = {
  title: "Branding e Identidad Visual en Pereira | Oscar Rendón Visual",
  description:
    "Diseño de branding e identidad visual para empresas y emprendedores en Pereira. Logotipos, sistemas gráficos y aplicaciones de marca con enfoque profesional.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/servicios/branding-identidad-visual/",
  },
};

export default function BrandingIdentidadVisualPage() {
  return (
    <>
      <Header />
      <BrandingIdentidadVisualClient />
      <Footer />
    </>
  );
}
