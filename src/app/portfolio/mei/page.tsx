import type { Metadata } from "next";
import MeiClient from "./MeiClient";

export const metadata: Metadata = {
  title: "Identidad Visual para MEI Uñas & Spa | Oscar Rendón Visual",
  description:
    "Proyecto de identidad visual, redes sociales, fachada y piezas comerciales desarrollado para MEI Uñas & Spa por Oscar Rendón Visual.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/portfolio/mei/",
  },
};

export default function MeiPortfolioPage() {
  return <MeiClient />;
}
