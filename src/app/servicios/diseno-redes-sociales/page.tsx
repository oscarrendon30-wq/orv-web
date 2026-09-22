import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisenoRedesSocialesClient from "./DisenoRedesSocialesClient";

export const metadata: Metadata = {
  title: "Diseño para Redes Sociales en Pereira | Oscar Rendón Visual",
  description:
    "Diseño profesional para redes sociales en Pereira: posts, historias, carruseles, campañas y piezas visuales para marcas, empresas y emprendimientos.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/servicios/diseno-redes-sociales/",
  },
};

export default function DisenoRedesSocialesPage() {
  return (
    <>
      <Header />
      <DisenoRedesSocialesClient />
      <Footer />
    </>
  );
}
