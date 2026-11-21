"use client";

import { ExternalLink, MessageSquareQuote, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GOOGLE_PROFILE =
  "https://maps.google.com/maps?cid=4608304327267196475";
const GOOGLE_REVIEW =
  "https://search.google.com/local/writereview?placeid=ChIJ8d0yh4LMDIUROx6oq1788z8";

const reviews = [
  {
    id: "AbFvOqmcHyARR3jaUwdYpEP-QG6abadGFQAkFAHLNwcukGG9N2q66sy7faRv25Iw9senILOtpkKS",
    author: "Alejandro Cardona",
    rating: 5,
    text: "Un trabajo muy profesional, de calidad y a otro nivel.",
    date: "21 nov 2026",
  },
];

export default function Reviews() {
  const { language } = useLanguage();

  const copy =
    language === "en"
      ? {
          eyebrow: "CLIENT REVIEWS",
          title: "What clients say about working with Oscar Rendón Visual.",
          body:
            "Real reviews published on the official Google Business Profile. Each testimonial is shown faithfully and can be verified directly on Google.",
          profile: "View Google profile",
          review: "Leave a Google review",
          verified: "Verified Google review",
          original: "Original review in Spanish",
        }
      : {
          eyebrow: "OPINIONES DE CLIENTES",
          title: "Lo que dicen quienes han trabajado con Oscar Rendón Visual.",
          body:
            "Reseñas reales publicadas en el Google Business Profile oficial. Cada testimonio se muestra fielmente y puede verificarse directamente en Google.",
          profile: "Ver perfil en Google",
          review: "Dejar una reseña en Google",
          verified: "Reseña verificada en Google",
          original: "Comentario original",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-4">
              {copy.eyebrow}
            </p>
            <h2
              id="reviews-heading"
              className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-6"
            >
              {copy.title}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-8">
              {copy.body}
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
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

          <div className="lg:col-span-7 space-y-5">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7 md:p-9 shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center">
                    <MessageSquareQuote className="h-6 w-6 text-[#00A3FF]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {review.author}
                        </h3>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00A3FF] mt-1">
                          {copy.verified}
                        </p>
                      </div>
                      <span className="text-xs text-zinc-500">{review.date}</span>
                    </div>

                    <div
                      className="flex items-center gap-1 mb-5"
                      aria-label={`${review.rating} de 5 estrellas`}
                    >
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 text-[#00A3FF] fill-current"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light">
                      “{review.text}”
                    </blockquote>

                    {language === "en" && (
                      <p className="mt-4 text-xs text-zinc-500">{copy.original}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
