import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import FloatingAssistant from "@/components/FloatingAssistant";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oscar Rendón Visual | Diseño Gráfico Senior",
  description: "30 años creando presencia visual profesional para marcas, medios y empresas. Especializado en branding, diseño editorial, redes sociales, empaques y etiquetas. Desde Pereira, Colombia para el mundo.",
  keywords: [
    "Diseño Gráfico Pereira",
    "Diseñador Gráfico Senior",
    "Branding y Diseño Editorial",
    "Diseño de empaques y etiquetas",
    "Presencia Visual Profesional",
    "Oscar Rendón Visual",
    "Diseño de Redes Sociales",
    "Presentaciones Corporativas"
  ],
  authors: [{ name: "Oscar Rendón" }],
  creator: "Oscar Rendón Visual",
  openGraph: {
    title: "Oscar Rendón Visual | Diseño Gráfico Senior",
    description: "30 años creando presencia visual profesional para marcas, medios y empresas. Especializado en branding, diseño editorial, redes sociales, empaques y etiquetas.",
    url: "https://oscarrendon.visual", // placeholder or domain
    siteName: "Oscar Rendón Visual",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Rendón Visual | Diseño Gráfico Senior",
    description: "30 años creando presencia visual profesional para marcas, medios y empresas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-brand-deep text-brand-text-primary selection:bg-brand-gold/20 selection:text-brand-text-primary overflow-x-hidden">
        <LanguageProvider>
          {children}
          <FloatingAssistant />
        </LanguageProvider>
      </body>
    </html>
  );
}
