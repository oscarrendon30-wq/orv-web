"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-[#0a192f] text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,163,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,163,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            {language === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
          </h1>
          
          <div className="space-y-8 font-sans text-zinc-300 leading-relaxed text-sm md:text-base">
            {language === 'es' ? (
              <>
                <p>
                  En <strong>Oscar Rendón Visual</strong> utilizamos cookies para asegurar el correcto funcionamiento técnico de nuestro portafolio y mejorar tu experiencia de navegación.
                </p>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">¿Qué son las cookies?</h2>
                  <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan a que el sitio funcione correctamente y a recordar tus preferencias.</p>
                </div>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Cookies que utilizamos actualmente</h2>
                  <p>En este momento, nuestro sitio web únicamente utiliza <strong>cookies técnicas y estrictamente necesarias</strong>. Estas cookies son esenciales para:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Recordar tus preferencias de idioma (Español / Inglés).</li>
                    <li>Garantizar la seguridad y el correcto rendimiento de la página.</li>
                  </ul>
                  <p className="mt-2">No utilizamos cookies de seguimiento, Google Analytics, ni píxeles publicitarios de terceros que recaben información personal sin tu consentimiento explícito.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Futuras herramientas de medición</h2>
                  <p>Si en el futuro Oscar Rendón Visual decide implementar herramientas de analítica o marketing, actualizaremos esta política y requeriremos tu aviso y consentimiento previo mediante un banner de cookies visible.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Gestión de cookies</h2>
                  <p>Puedes configurar tu navegador para rechazar todas o algunas de las cookies. Sin embargo, ten en cuenta que deshabilitar las cookies técnicas puede afectar el funcionamiento de algunas características del sitio web, como el guardado del idioma.</p>
                </div>
              </>
            ) : (
              <>
                <p>
                  At <strong>Oscar Rendón Visual</strong>, we use cookies to ensure the proper technical operation of our portfolio and to improve your browsing experience.
                </p>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">What are cookies?</h2>
                  <p>Cookies are small text files that are stored on your device when you visit a website. They help the site function properly and remember your preferences.</p>
                </div>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Cookies we currently use</h2>
                  <p>At this time, our website only uses <strong>technical and strictly necessary cookies</strong>. These cookies are essential to:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Remember your language preferences (Spanish / English).</li>
                    <li>Ensure the security and proper performance of the page.</li>
                  </ul>
                  <p className="mt-2">We do not use tracking cookies, Google Analytics, or third-party advertising pixels that collect personal information without your explicit consent.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Future measurement tools</h2>
                  <p>If Oscar Rendón Visual decides to implement analytics or marketing tools in the future, we will update this policy and require your prior notice and consent through a visible cookie banner.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Cookie management</h2>
                  <p>You can configure your browser to reject all or some cookies. However, please note that disabling technical cookies may affect the functionality of some website features, such as language saving.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
