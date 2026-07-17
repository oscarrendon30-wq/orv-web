"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  const { language, t } = useLanguage();

  const handleRevoke = () => {
    localStorage.removeItem("cookie-consent");
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

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
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Cookies que utilizamos</h2>
                  <p>Nuestro sitio web utiliza dos tipos de cookies:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Cookies técnicas necesarias:</strong> Son esenciales para recordar tus preferencias de idioma (Español / Inglés) y garantizar el correcto rendimiento de la página.</li>
                    <li><strong>Cookies analíticas (Google Analytics 4):</strong> Solo se activan si nos das tu consentimiento explícito. Nos ayudan a medir de forma agregada las visitas y las interacciones para mejorar la experiencia de usuario con fines estadísticos.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Gestión y revocación de cookies</h2>
                  <p>Puedes cambiar tu preferencia sobre las cookies analíticas en cualquier momento utilizando el botón a continuación. Al revocar tu consentimiento, los scripts de medición se detendrán y tu preferencia quedará registrada.</p>
                  <button 
                    onClick={handleRevoke}
                    className="mt-4 bg-zinc-100 text-[#071B33] font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors"
                  >
                    {t('cookieBanner.revoke')}
                  </button>
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
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Cookies we use</h2>
                  <p>Our website uses two types of cookies:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Strictly necessary cookies:</strong> These are essential to remember your language preferences (Spanish / English) and ensure the proper performance of the page.</li>
                    <li><strong>Analytical cookies (Google Analytics 4):</strong> These are only activated if you give us your explicit consent. They help us anonymously measure visits and interactions to improve the user experience for statistical purposes.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Cookie management and revocation</h2>
                  <p>You can change your preference regarding analytical cookies at any time using the button below. By revoking your consent, tracking scripts will stop and your preference will be saved.</p>
                  <button 
                    onClick={handleRevoke}
                    className="mt-4 bg-zinc-100 text-[#071B33] font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors"
                  >
                    {t('cookieBanner.revoke')}
                  </button>
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
