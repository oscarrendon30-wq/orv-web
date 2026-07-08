import Image from "next/image";

import SectionSeparator from "@/components/ui/SectionSeparator";

export default function TransitionBand() {
  return (
    <section className="relative w-full h-[100px] sm:h-[120px] md:h-[130px] lg:h-[160px] overflow-hidden bg-[#071B33]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/home/transition-collage-orv.webp"
          alt="Transición ORV"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Corporate Blue Tint Overlay (Subtle) */}
      <div className="absolute inset-0 bg-[#00A3FF]/5 mix-blend-overlay z-0 pointer-events-none" />

      {/* Top and Bottom Fades for seamless transition */}
      <div className="absolute top-0 inset-x-0 h-12 md:h-20 lg:h-24 bg-gradient-to-b from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-8 md:h-12 bg-gradient-to-t from-[#071B33] to-transparent z-10 pointer-events-none" />
      
      {/* Subtle Bottom Border Line */}
      <SectionSeparator className="absolute bottom-0" />
    </section>
  );
}
