import type { Metadata } from "next";
import MonreveClient from "./MonreveClient";

export const metadata: Metadata = {
  title: "Branding y Diseño Web para Monreve | Oscar Rendón Visual",
  description:
    "Identidad corporativa, piezas comerciales, comunicación digital y diseño web para Monreve Solutions, desarrollado por Oscar Rendón Visual.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/portfolio/monreve/",
  },
};

export default function MonrevePortfolioPage() {
  return <MonreveClient />;
}
