import type { Metadata } from "next";
import BeGoodClient from "./BeGoodClient";

export const metadata: Metadata = {
  title: "Branding y Packaging para Be Good | Oscar Rendón Visual",
  description:
    "Proyecto de branding, identidad visual y diseño de empaques para Be Good, una marca de moda con propósito y presencia visual coherente.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/portfolio/be-good/",
  },
};

export default function BeGoodPortfolioPage() {
  return <BeGoodClient />;
}
