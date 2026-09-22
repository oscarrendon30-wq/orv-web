import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisenoWebClient from "./DisenoWebClient";

export const metadata: Metadata = {
  title: "Diseño Web en Pereira | Oscar Rendón Visual",
  description:
    "Diseño web profesional en Pereira para empresas y emprendimientos. Sitios modernos, responsive y coherentes con la identidad visual de cada marca.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/servicios/diseno-web/",
  },
};

export default function DisenoWebPage() {
  return (
    <>
      <Header />
      <DisenoWebClient />
      <Footer />
    </>
  );
}
