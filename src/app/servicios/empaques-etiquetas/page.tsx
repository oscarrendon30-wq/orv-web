import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisenoEmpaquesEtiquetasClient from "./DisenoEmpaquesEtiquetasClient";

export const metadata: Metadata = {
  title: "Diseño de Empaques y Etiquetas en Pereira | Oscar Rendón Visual",
  description:
    "Diseño profesional de empaques y etiquetas en Pereira para productos y marcas. Packaging, etiquetas, marquillas y aplicaciones gráficas con identidad visual coherente.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/servicios/empaques-etiquetas/",
  },
};

export default function DisenoEmpaquesEtiquetasPage() {
  return (
    <>
      <Header />
      <DisenoEmpaquesEtiquetasClient />
      <Footer />
    </>
  );
}
