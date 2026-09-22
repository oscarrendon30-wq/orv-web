import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisenoEditorialClient from "./DisenoEditorialClient";

export const metadata: Metadata = {
  title: "Diseño Editorial y Diagramación en Pereira | Oscar Rendón Visual",
  description:
    "Diseño editorial y diagramación profesional en Pereira para revistas, periódicos, catálogos, informes y publicaciones impresas o digitales.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/servicios/diseno-editorial/",
  },
};

export default function DisenoEditorialPage() {
  return (
    <>
      <Header />
      <DisenoEditorialClient />
      <Footer />
    </>
  );
}
