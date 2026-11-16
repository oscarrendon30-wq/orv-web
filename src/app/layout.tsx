import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import FloatingAssistant from "@/components/FloatingAssistant";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  metadataBase: new URL("https://www.oscarrendonvisual.com"),
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
    url: "https://www.oscarrendonvisual.com",
    siteName: "Oscar Rendón Visual",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/home/hero-oscar-rendon-home.webp",
        width: 1672,
        height: 941,
        alt: "Oscar Rendón - Diseñador Gráfico Senior en Pereira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Rendón Visual | Diseño Gráfico Senior",
    description: "30 años creando presencia visual profesional para marcas, medios y empresas.",
    images: ["/images/home/hero-oscar-rendon-home.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.oscarrendonvisual.com/#organization",
      name: "Oscar Rendón Visual",
      url: "https://www.oscarrendonvisual.com/",
      logo: "https://www.oscarrendonvisual.com/images/brand/logo-horizontal-transparent.webp",
      image: "https://www.oscarrendonvisual.com/images/home/hero-oscar-rendon-home.webp",
      email: "contacto@oscarrendonvisual.com",
      telephone: "+57 300 438 2654",
      areaServed: [
        { "@type": "City", name: "Pereira" },
        { "@type": "AdministrativeArea", name: "Risaralda" },
        { "@type": "Country", name: "Colombia" },
      ],
      sameAs: [
        "https://www.instagram.com/oscar_rendonvisual",
        "https://web.facebook.com/oscarrendondisenografico",
      ],
      founder: { "@id": "https://www.oscarrendonvisual.com/#oscar-rendon" },
    },
    {
      "@type": "Person",
      "@id": "https://www.oscarrendonvisual.com/#oscar-rendon",
      name: "Oscar Rendón",
      jobTitle: "Diseñador Gráfico Senior",
      worksFor: { "@id": "https://www.oscarrendonvisual.com/#organization" },
      url: "https://www.oscarrendonvisual.com/",
      sameAs: [
        "https://www.instagram.com/oscar_rendonvisual",
        "https://web.facebook.com/oscarrendondisenografico",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.oscarrendonvisual.com/#website",
      url: "https://www.oscarrendonvisual.com/",
      name: "Oscar Rendón Visual",
      inLanguage: "es-CO",
      publisher: { "@id": "https://www.oscarrendonvisual.com/#organization" },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>
          <GoogleAnalytics />
          {children}
          <FloatingAssistant />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
