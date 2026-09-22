"use client";

import { useState } from "react";
import { Send, MessageSquare, Instagram, Facebook, MapPin, Globe } from "lucide-react";
import SectionSeparator from "@/components/ui/SectionSeparator";
import { useLanguage } from "@/context/LanguageContext";
import { trackGenerateLead, trackClickWhatsApp, trackEvent } from "@/utils/analytics";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "branding",
    message: "",
    website: "", // Honeypot
  });
  const [formLoadTime] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20de%20dise%C3%B1o%20gr%C3%A1fico.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds timeout

      const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL || '/api/contact.php';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          ...formData,
          formLoadTime
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const data = await response.json().catch(() => ({ success: false, message: 'Invalid JSON response from server' }));

      if (response.ok && data.success === true) {
        setSubmitSuccess(true);
        trackGenerateLead(); // Trigger GA4 event ONLY on success
        setFormData({ name: "", email: "", projectType: "branding", message: "", website: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        // Validation error, too many requests, or server error
        setSubmitError(data.message || 'Ocurrió un error al enviar tu mensaje.');
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setSubmitError('El tiempo de espera se agotó. Revisa tu conexión a internet e intenta de nuevo.');
      } else {
        setSubmitError('Ocurrió un error de red. Por favor intenta de nuevo.');
      }
    } finally {
      setIsSubmitting(false);
    }
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
                {t("contact.tagline")}
              </h2>
              <h3 className="font-sans text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                {t("contact.title")}
              </h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed mb-10">
                {t("contact.subtitle")}
              </p>
            </div>

            {/* Direct details card */}
            <div className="space-y-8 bg-[#0c2446]/30 p-10 sm:p-12 rounded-[24px] border border-[#00A3FF]/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden flex flex-col justify-center h-full">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClickWhatsApp("Contact Section")}
                className="flex items-center gap-6 group cursor-pointer relative z-10"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-[#00A3FF] group-hover:border-[#00A3FF]/40 transition-colors flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    {t("contact.whatsapp")}
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
                    {t("contact.instagram")}
                  </h4>
                  <p className="font-sans text-sm font-bold text-white group-hover:text-[#00A3FF] transition-colors">
                    @oscar_rendonvisual
                  </p>
                </div>
              </a>

              <a
                href="mailto:contacto@oscarrendonvisual.com"
                className="flex items-center gap-6 group cursor-pointer relative z-10"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-[#00A3FF] group-hover:border-[#00A3FF]/40 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    {t("contact.email")}
                  </h4>
                  <p className="font-sans text-sm font-bold text-white group-hover:text-[#00A3FF] transition-colors">
                    contacto@oscarrendonvisual.com
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
                    {t("contact.facebook")}
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
                    {t("contact.location")}
                  </h4>
                  <p className="font-sans text-sm font-bold text-white">
                    {t("contact.locationValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 border-t border-white/10 pt-8 relative z-10">
                <div className="w-12 h-12 rounded-[12px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-[#00A3FF] flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    {t("contact.availability")}
                  </h4>
                  <p className="font-sans text-sm font-bold text-white">
                    {t("contact.availabilityValue")}
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
                {t("contact.formTitle")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {t("contact.formName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("contact.formNamePlaceholder")}
                      className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#00A3FF]/50 focus:bg-white focus:outline-none p-3.5 text-sm font-sans text-zinc-900 rounded-[12px] transition-colors shadow-inner placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {t("contact.formEmail")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("contact.formEmailPlaceholder")}
                      className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#00A3FF]/50 focus:bg-white focus:outline-none p-3.5 text-sm font-sans text-zinc-900 rounded-[12px] transition-colors shadow-inner placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    {t("contact.formProjectType")}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#00A3FF]/50 focus:bg-white focus:outline-none p-3.5 text-sm font-sans text-zinc-900 rounded-[12px] transition-colors shadow-inner"
                  >
                    <option value="branding" className="bg-white text-zinc-900">{t("contact.formProjectTypeOptions.branding")}</option>
                    <option value="editorial" className="bg-white text-zinc-900">{t("contact.formProjectTypeOptions.editorial")}</option>
                    <option value="packaging" className="bg-white text-zinc-900">{t("contact.formProjectTypeOptions.packaging")}</option>
                    <option value="social-media" className="bg-white text-zinc-900">{t("contact.formProjectTypeOptions.socialMedia")}</option>
                    <option value="web-presentations" className="bg-white text-zinc-900">{t("contact.formProjectTypeOptions.webPresentations")}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    {t("contact.formDetails")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contact.formDetailsPlaceholder")}
                    className="w-full bg-[#F8FAFC] border border-transparent focus:border-[#00A3FF]/50 focus:bg-white focus:outline-none p-3.5 text-sm font-sans text-zinc-900 rounded-[12px] transition-colors shadow-inner resize-none placeholder:text-zinc-400"
                  />
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    required
                    id="consent"
                    className="mt-1 w-4 h-4 rounded border-zinc-300 text-[#00A3FF] focus:ring-[#00A3FF]"
                  />
                  <label htmlFor="consent" className="text-xs font-sans text-zinc-400 leading-tight">
                    {t("legal.consent")} <a href="/privacy" className="text-[#00A3FF] hover:underline" target="_blank">{t("legal.privacy")}</a>
                  </label>
                </div>

                <div className="absolute opacity-0 -left-[9999px] pointer-events-none" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#0c2446] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-[#00A3FF] hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(12,36,70,0.15)] hover:shadow-[0_15px_40px_rgba(0,163,255,0.3)] disabled:opacity-50 mt-4"
                >
                  {isSubmitting ? (
                    <span>{t("contact.formSubmitting")}</span>
                  ) : (
                    <>
                      <span>{t("contact.formSubmit")}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-4 bg-emerald-950/20 border border-emerald-800 text-emerald-400 text-xs font-semibold rounded-sm text-center">
                    {t("contact.formSuccess")}
                  </div>
                )}
                {submitError && (
                  <div className="p-4 bg-red-950/20 border border-red-800 text-red-400 text-xs font-semibold rounded-sm text-center">
                    {submitError}
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
