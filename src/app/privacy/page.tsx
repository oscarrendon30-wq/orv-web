"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionSeparator from "@/components/ui/SectionSeparator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-[#0a192f] text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,163,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,163,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          
          <div className="space-y-8 font-sans text-zinc-300 leading-relaxed text-sm md:text-base">
            {language === 'es' ? (
              <>
                <p>
                  En <strong>Oscar Rendón Visual</strong>, respetamos tu privacidad y nos comprometemos a proteger los datos personales que compartes con nosotros a través de este portafolio profesional. Esta política explica cómo recopilamos, usamos y protegemos tu información.
                </p>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">1. Información que recopilamos</h2>
                  <p>A través de nuestro formulario de contacto o mediante comunicación directa por WhatsApp, podemos recopilar la siguiente información: nombre, dirección de correo electrónico, número de teléfono y detalles específicos sobre los requerimientos de tu proyecto de diseño.</p>
                  <p className="mt-2">Adicionalmente, si nos das tu consentimiento explícito, utilizamos Google Analytics 4 para recopilar datos estadísticos anónimos sobre tu navegación (páginas visitadas, tiempo en el sitio, clics en enlaces) para mejorar la experiencia de usuario.</p>
                </div>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">2. Uso de la información</h2>
                  <p>La información recopilada se utiliza exclusivamente para:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Responder a tus consultas y proporcionar presupuestos de diseño gráfico.</li>
                    <li>Gestionar la comunicación durante el desarrollo de tu proyecto.</li>
                    <li>Analizar el tráfico del sitio web con fines estadísticos (solo si aceptaste las cookies analíticas).</li>
                  </ul>
                  <p className="mt-2">Oscar Rendón Visual no vende, alquila ni comparte tus datos personales con terceros para fines de marketing.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">3. Seguridad de los datos</h2>
                  <p>Implementamos medidas de seguridad para proteger tu información personal contra acceso no autorizado, alteración o divulgación. Las comunicaciones por WhatsApp están cifradas de extremo a extremo por la propia plataforma.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">4. Tus derechos y revocación de consentimiento</h2>
                  <p>Tienes derecho a solicitar el acceso, rectificación o eliminación de tus datos personales en cualquier momento contactándonos a <a href="mailto:contacto@oscarrendonvisual.com" className="text-[#00A3FF] hover:underline">contacto@oscarrendonvisual.com</a>.</p>
                  <p className="mt-2">Si deseas revocar tu consentimiento para el uso de cookies analíticas, puedes hacerlo desde nuestra <Link href="/cookies" className="text-[#00A3FF] hover:underline">Política de Cookies</Link>.</p>
                </div>
              </>
            ) : (
              <>
                <p>
                  At <strong>Oscar Rendón Visual</strong>, we respect your privacy and are committed to protecting the personal data you share with us through this professional portfolio. This policy explains how we collect, use, and protect your information.
                </p>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">1. Information We Collect</h2>
                  <p>Through our contact form or direct communication via WhatsApp, we may collect the following information: name, email address, phone number, and specific details about your design project requirements.</p>
                  <p className="mt-2">Additionally, if you give us your explicit consent, we use Google Analytics 4 to collect anonymous statistical data about your browsing (pages visited, time on site, link clicks) to improve the user experience.</p>
                </div>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">2. Use of Information</h2>
                  <p>The collected information is used exclusively to:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Respond to your inquiries and provide graphic design quotes.</li>
                    <li>Manage communication during the development of your project.</li>
                    <li>Analyze website traffic for statistical purposes (only if you accepted analytical cookies).</li>
                  </ul>
                  <p className="mt-2">Oscar Rendón Visual does not sell, rent, or share your personal data with third parties for marketing purposes.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">3. Data Security</h2>
                  <p>We implement security measures to protect your personal information against unauthorized access, alteration, or disclosure. Communications via WhatsApp are end-to-end encrypted by the platform itself.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">4. Your Rights and Consent Revocation</h2>
                  <p>You have the right to request access to, rectification, or deletion of your personal data at any time by contacting us at <a href="mailto:contacto@oscarrendonvisual.com" className="text-[#00A3FF] hover:underline">contacto@oscarrendonvisual.com</a>.</p>
                  <p className="mt-2">If you wish to revoke your consent for the use of analytical cookies, you can do so from our <Link href="/cookies" className="text-[#00A3FF] hover:underline">Cookie Policy</Link>.</p>
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
