import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso | Oscar Rendón Visual",
  description: "Aviso legal y términos de uso del sitio web de Oscar Rendón Visual, incluyendo propiedad intelectual, servicios y responsabilidades.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/terms/",
  },
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
