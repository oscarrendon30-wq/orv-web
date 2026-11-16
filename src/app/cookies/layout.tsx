import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Oscar Rendón Visual",
  description: "Información sobre las cookies técnicas y analíticas utilizadas en oscarrendonvisual.com y cómo gestionar o revocar el consentimiento.",
  alternates: {
    canonical: "https://www.oscarrendonvisual.com/cookies/",
  },
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
