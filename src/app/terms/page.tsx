"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-[#0a192f] text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,163,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,163,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            {language === 'es' ? 'Aviso Legal y Términos de Uso' : 'Legal Notice & Terms of Use'}
          </h1>
          
          <div className="space-y-8 font-sans text-zinc-300 leading-relaxed text-sm md:text-base">
            {language === 'es' ? (
              <>
                <p>
                  Bienvenido al portafolio profesional de <strong>Oscar Rendón Visual</strong>. El acceso y uso de este sitio web están sujetos a los siguientes términos y condiciones.
                </p>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">1. Identidad del titular</h2>
                  <p>Este sitio web es propiedad de Oscar Rendón Visual, estudio de diseño gráfico operando desde Pereira, Colombia, y ofreciendo servicios a nivel internacional.</p>
                </div>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">2. Propiedad intelectual</h2>
                  <p>Todos los diseños, logotipos, textos, fotografías, proyectos de portafolio y código fuente presentes en este sitio web están protegidos por derechos de autor y propiedad intelectual. Queda estrictamente prohibida su reproducción, distribución, comunicación pública o transformación sin la autorización expresa de Oscar Rendón Visual.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">3. Servicios y contratación</h2>
                  <p>La información detallada en este sitio web (servicios, procesos) tiene carácter informativo. La contratación de servicios de diseño gráfico, branding, web o editorial se formalizará siempre de manera privada, mediante una propuesta de trabajo estructurada y aprobada por ambas partes tras el contacto inicial.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">4. Exención de responsabilidad</h2>
                  <p>Oscar Rendón Visual no se hace responsable de posibles errores en la navegación o de daños que puedan causarse al sistema informático del usuario por virus u otros elementos externos. Asimismo, el sitio puede contener enlaces a sitios de terceros, sobre los cuales no tenemos control ni responsabilidad.</p>
                </div>
              </>
            ) : (
              <>
                <p>
                  Welcome to the professional portfolio of <strong>Oscar Rendón Visual</strong>. Access and use of this website are subject to the following terms and conditions.
                </p>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">1. Identity of the Owner</h2>
                  <p>This website is owned by Oscar Rendón Visual, a graphic design studio operating from Pereira, Colombia, and offering services internationally.</p>
                </div>
                
                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">2. Intellectual Property</h2>
                  <p>All designs, logos, texts, photographs, portfolio projects, and source code present on this website are protected by copyright and intellectual property rights. Their reproduction, distribution, public communication, or transformation without the express authorization of Oscar Rendón Visual is strictly prohibited.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">3. Services and Contracting</h2>
                  <p>The information detailed on this website (services, processes) is for informational purposes. The contracting of graphic design, branding, web, or editorial services will always be formalized privately, through a structured work proposal approved by both parties after the initial contact.</p>
                </div>

                <div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">4. Disclaimer</h2>
                  <p>Oscar Rendón Visual is not responsible for possible navigation errors or damages that may be caused to the user's computer system by viruses or other external elements. Likewise, the site may contain links to third-party sites, over which we have no control or responsibility.</p>
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
