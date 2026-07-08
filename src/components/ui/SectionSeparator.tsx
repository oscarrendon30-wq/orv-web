import React from 'react';

interface SectionSeparatorProps {
  className?: string;
}

export default function SectionSeparator({ className = "" }: SectionSeparatorProps) {
  // Manejo inteligente de posición: si pasan "absolute", no forzamos "relative".
  const positionClass = className.includes('absolute') ? className : `relative ${className}`;
  
  return (
    <div className={`left-1/2 -translate-x-1/2 w-[100vw] flex items-center justify-center pointer-events-none z-20 ${positionClass}`}>
      <div className="absolute inset-x-0 h-[4px] bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent blur-[3px]" />
      <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-[#00A3FF]/10 via-[#00A3FF]/50 to-[#00A3FF]/10" />
    </div>
  );
}
