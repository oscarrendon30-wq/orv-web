"use client";

import { ExternalLink, MessageSquareQuote, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GOOGLE_PROFILE =
  "https://maps.google.com/maps?cid=4608304327267196475";
const GOOGLE_REVIEW =
  "https://search.google.com/local/writereview?placeid=ChIJ8d0yh4LMDIUROx6oq1788z8";

export default function Reviews() {
  const { language } = useLanguage();

  const copy =
    language === "en"
      ? {
          eyebrow: "CLIENT REVIEWS",
          title: "What clients say about working with Oscar Rendón Visual.",
          body:
            "Verified Google reviews will appear here exactly as clients publish them. This section connects each testimonial with the official Google Business Profile so visitors can verify the source.",
          emptyTitle: "Building verified social proof",
          emptyBody:
            "The Google review channel is now active. As new client reviews arrive, they will be added here without changing their meaning or wording.",
          profile: "View Google profile",
          review: "Leave a Google review",
          verified: "Verified on Google",
        }
      : {
          eyebrow: "OPINIONES DE CLIENTES",
          title: "Lo que dicen quienes han trabajado con Oscar Rendón Visual.",
          body:
            "Las reseñas verificadas de Google aparecerán aquí tal como las publiquen los clientes. Cada testimonio quedará conectado con el Google Business Profile oficial para que el visitante pueda comprobar su origen.",
          emptyTitle: "Construyendo prueba social verificada",
          emptyBody:
            "El canal de reseñas de Google ya está activo. A medida que lleguen nuevas opiniones de clientes, las incorporaremos aquí respetando su sentido y redacción.",
          profile: "Ver perfil en Google",
          review: "Dejar una reseña en Google",
          verified: "Verificado en Google",
        };

  return (
    <section
      id="resenas"
      className="scroll-mt-28 py-24 md:py-32 bg-[#071B33] relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#00A3FF]/10 blur-[120px]" />
        <div className="absolute inset-y-0 left-1/3 w-px bg-white/5 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-4">
              {copy.eyebrow}
            </p>
            <h2
              id="reviews-heading"
              className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-6"
            >
              {copy.title}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              {copy.body}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7 md:p-9 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center">
                  <MessageSquareQuote className="h-6 w-6 text-[#00A3FF]" />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-3" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((item) => (
                      <Star
                        key={item}
                        className="h-4 w-4 text-[#00A3FF]"
                        strokeWidth={1.8}
                      />
                    ))}
                    <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                      {copy.verified}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {copy.emptyTitle}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                    {copy.emptyBody}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-7 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={GOOGLE_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-[#00A3FF]/50 hover:text-[#00A3FF] transition-colors"
                >
                  {copy.profile}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={GOOGLE_REVIEW}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00A3FF] px-5 py-3 text-sm font-bold text-[#050B14] hover:bg-[#30B4FF] transition-colors"
                >
                  {copy.review}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
