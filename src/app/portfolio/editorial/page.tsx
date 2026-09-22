import type { Metadata } from "next";
import EditorialClient from "./EditorialClient";

export const metadata: Metadata = {
  title: "Diseño Editorial y Diagramación | Oscar Rendón Visual",
  description:
    "Portafolio de diseño editorial, diagramación, revistas, periódicos, publicaciones y piezas impresas desarrollado por Oscar Rendón Visual.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/portfolio/editorial/",
  },
};

export default function EditorialPortfolioPage() {
  return <EditorialClient />;
}
