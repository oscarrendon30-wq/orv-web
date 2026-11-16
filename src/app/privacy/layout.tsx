import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Oscar Rendón Visual",
  description: "Política de privacidad de Oscar Rendón Visual: tratamiento de datos personales, formularios, analítica y derechos de los usuarios.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/privacy/",
  },
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
