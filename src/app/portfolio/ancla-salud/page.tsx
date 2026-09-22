import type { Metadata } from "next";
import AnclaSaludClient from "./AnclaSaludClient";

export const metadata: Metadata = {
  title: "Identidad Visual para Ancla Salud | Oscar Rendón Visual",
  description:
    "Proyecto de identidad visual y comunicación gráfica para Ancla Salud, desarrollado por Oscar Rendón Visual.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/portfolio/ancla-salud/",
  },
};

export default function AnclaSaludPortfolioPage() {
  return <AnclaSaludClient />;
}
