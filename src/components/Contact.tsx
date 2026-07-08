"use client";

import { useState } from "react";
import { Send, MessageSquare, Instagram, Facebook, MapPin, Globe } from "lucide-react";
import SectionSeparator from "@/components/ui/SectionSeparator";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "branding",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20de%20dise%C3%B1o%20gr%C3%A1fico.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", projectType: "branding", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="scroll-mt-28 py-24 md:py-32 bg-gradient-to-b from-[#050B14] to-[#071B33] relative">
      <SectionSeparator className="absolute top-0" />
      {/* Floating sphere glow behind contact */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#00A3FF] opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-4">
                Contacto
              </h2>
              <h3 className="font-sans text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                Construyamos presencia visual.
              </h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed mb-10">
                ¿Tienes una marca en mente, un libro por publicar, etiquetas por desarrollar o redes por optimizar? Ponte en contacto y hablemos sobre cómo llevar tu visión gráfica al siguiente nivel.
              </p>
            </div>

            {/* Direct details card */}
            <div className="space-y-8 bg-[#0c2446]/30 p-10 sm:p-12 rounded-[24px] border border-[#00A3FF]/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden flex flex-col justify-center h-full">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer relative z-10"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-[#00A3FF] group-hover:border-[#00A3FF]/40 transition-colors flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    WhatsApp Directo
                  </h4>
                  <p className="font-sans text-sm font-bold text-white group-hover:text-[#00A3FF] transition-colors">
                    +57 300 438 2654
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/oscar_rendonvisual"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer relative z-10"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-[#00A3FF] group-hover:border-[#00A3FF]/40 transition-colors flex-shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Instagram Profesional
                  </h4>
                  <p className="font-sans text-sm font-bold text-white group-hover:text-[#00A3FF] transition-colors">
                    @oscar_rendonvisual
                  </p>
                </div>
              </a>

              <a
                href="https://web.facebook.com/oscarrendondisenografico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer relative z-10"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-[#00A3FF] group-hover:border-[#00A3FF]/40 transition-colors flex-shrink-0">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Facebook Profesional
                  </h4>
                  <p className="font-sans text-sm font-bold text-white group-hover:text-[#00A3FF] transition-colors">
                    Oscar Rendón Visual
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-6 relative z-10">
                <div className="w-12 h-12 rounded-[12px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-[#00A3FF] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Ubicación Física
                  </h4>
                  <p className="font-sans text-sm font-bold text-white">
                    Pereira, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 border-t border-white/10 pt-8 relative z-10">
                <div className="w-12 h-12 rounded-[12px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-[#00A3FF] flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Disponibilidad
                  </h4>
                  <p className="font-sans text-sm font-bold text-white">
                    Trabajo remoto global
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c2446]/30 p-8 sm:p-12 rounded-[24px] border border-[#00A3FF]/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00A3FF] opacity-[0.02] blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <h3 className="font-sans text-2xl font-bold text-white mb-8 relative z-10 tracking-tight">
                Enviar mensaje directo
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre completo"
                      className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#00A3FF]/50 focus:bg-white focus:outline-none p-3.5 text-sm font-sans text-zinc-900 rounded-[12px] transition-colors shadow-inner placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ejemplo@correo.com"
                      className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#00A3FF]/50 focus:bg-white focus:outline-none p-3.5 text-sm font-sans text-zinc-900 rounded-[12px] transition-colors shadow-inner placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Tipo de Proyecto
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#00A3FF]/50 focus:bg-white focus:outline-none p-3.5 text-sm font-sans text-zinc-900 rounded-[12px] transition-colors shadow-inner"
                  >
                    <option value="branding" className="bg-white text-zinc-900">Branding e Identidad Visual</option>
                    <option value="editorial" className="bg-white text-zinc-900">Diseño Editorial</option>
                    <option value="packaging" className="bg-white text-zinc-900">Empaques y Etiquetas</option>
                    <option value="social-media" className="bg-white text-zinc-900">Redes Sociales</option>
                    <option value="web-presentations" className="bg-white text-zinc-900">Diseño Web / Presentaciones</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Detalles del Proyecto
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe de forma general tus necesidades de diseño visual..."
                    className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#00A3FF]/50 focus:bg-white focus:outline-none p-3.5 text-sm font-sans text-zinc-900 rounded-[12px] transition-colors shadow-inner resize-none placeholder:text-zinc-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#0c2446] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-[#00A3FF] hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(12,36,70,0.15)] hover:shadow-[0_15px_40px_rgba(0,163,255,0.3)] disabled:opacity-50 mt-4"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Enviar solicitud</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-4 bg-emerald-950/20 border border-emerald-800 text-emerald-400 text-xs font-semibold rounded-sm text-center">
                    ¡Mensaje simulado enviado con éxito! Nos comunicaremos contigo a la brevedad.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
      <SectionSeparator className="absolute bottom-0 rotate-180" />
    </section>
  );
}
