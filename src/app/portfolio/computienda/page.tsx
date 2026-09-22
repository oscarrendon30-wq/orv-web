import type { Metadata } from "next";
import CompuTiendaClient from "./CompuTiendaClient";

export const metadata: Metadata = {
  title: "Identidad Visual para CompuTienda | Oscar Rendón Visual",
  description:
    "Identidad visual, piezas comerciales y aplicaciones gráficas para CompuTienda, desarrolladas por Oscar Rendón Visual.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/portfolio/computienda/",
  },
};

export default function CompuTiendaPortfolioPage() {
  return <CompuTiendaClient />;
}
