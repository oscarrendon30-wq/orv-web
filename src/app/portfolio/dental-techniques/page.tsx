import type { Metadata } from "next";
import DentalTechniquesClient from "./DentalTechniquesClient";

export const metadata: Metadata = {
  title: "Branding y Diseño Web para Dental Techniques | Oscar Rendón Visual",
  description:
    "Proyecto de branding, diseño web y piezas comerciales para Dental Techniques, desarrollado por Oscar Rendón Visual.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/portfolio/dental-techniques/",
  },
};

export default function DentalTechniquesPortfolioPage() {
  return <DentalTechniquesClient />;
}
