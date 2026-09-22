import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiciosIndexClient from "./ServiciosIndexClient";

export const metadata: Metadata = {
  title: "Servicios de Diseño Gráfico en Pereira | Oscar Rendón Visual",
  description:
    "Servicios de diseño gráfico en Pereira: branding, identidad visual, diseño editorial, redes sociales, diseño web, empaques y soluciones visuales para empresas y marcas.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/servicios/",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <ServiciosIndexClient />
      <Footer />
    </>
  );
}
