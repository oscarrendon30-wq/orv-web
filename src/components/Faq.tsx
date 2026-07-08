"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionSeparator from "@/components/ui/SectionSeparator";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border-b border-white/5 py-5 last:border-0 last:pb-0 first:pt-0 relative z-10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="font-sans text-base font-bold text-white group-hover:text-[#00A3FF] transition-colors duration-200">
          {question}
        </span>
        <div className="w-8 h-8 rounded-[8px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-[#00A3FF]/30 group-hover:text-[#00A3FF] transition-colors flex-shrink-0 ml-4">
          {isOpen ? <Minus className="w-4 h-4 text-[#00A3FF]" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed pt-4 pb-2 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cómo se inicia un proyecto?",
      answer: "Iniciamos con una sesión de diagnóstico (por llamada de WhatsApp o Google Meet) para entender tus objetivos, necesidades y presupuesto. A partir de allí, elaboro una propuesta de trabajo estructurada detallando los alcances, plazos de entrega y costos. Una vez aprobado y realizado el abono inicial, comenzamos la fase de conceptualización.",
    },
    {
      question: "¿Trabajas de forma remota?",
      answer: "Sí, el 100% de mis proyectos se gestionan de forma remota. Trabajo desde Pereira, Colombia, y colaboro sin inconvenientes con marcas y empresas de cualquier lugar del mundo a través de canales de comunicación digital fluidos y eficientes.",
    },
    {
      question: "¿Qué tipo de archivos entregas?",
      answer: "Entrego todos los archivos finales listos para su uso: archivos vectoriales originales en formato editable (Adobe Illustrator, EPS o PDF editable) para impresión a gran formato, y archivos listos para web/pantallas (PNG, JPG y archivos de diseño profesional si aplica para proyectos web). Todo ordenado y documentado.",
    },
    {
      question: "¿Ofreces soporte después de la entrega?",
      answer: "Sí, todos mis proyectos incluyen una ventana de soporte de 15 días posteriores a la entrega final para resolver dudas técnicas de imprenta, guiar al desarrollador en piezas web o ayudar con la implementación de archivos en redes sociales.",
    },
    {
      question: "¿Diseñas piezas para impresión y redes sociales?",
      answer: "Sí, diseño para ambos mundos. Cuento con una profunda experiencia técnica en diseño editorial para pre-prensa e imprenta, y al mismo tiempo estructuro y diseño feeds profesionales y campañas visuales adaptadas a las plataformas digitales e Instagram.",
    },
    {
      question: "¿Puedo contratar una sola pieza o debe ser un paquete completo?",
      answer: "Trabajo bajo ambas modalidades. Podemos desarrollar proyectos puntuales (por ejemplo, el diseño de una sola etiqueta o portada de libro) o estructurar un paquete completo de identidad visual corporativa que abarque branding, papelería, empaques y redes.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-28 pt-20 md:pt-24 pb-24 md:pb-32 bg-gradient-to-b from-[#071B33] to-[#050B14] relative">
      <SectionSeparator className="absolute top-0" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Dudas comunes resueltas.
          </p>
        </div>

        {/* Faq Accordion List */}
        <div className="bg-[#0c2446]/30 p-8 sm:p-12 rounded-[24px] border border-[#00A3FF]/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00A3FF] opacity-[0.03] blur-[60px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
