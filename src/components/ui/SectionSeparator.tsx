import React from 'react';

interface SectionSeparatorProps {
  className?: string;
}

export default function SectionSeparator({ className = "" }: SectionSeparatorProps) {
  // Manejo inteligente de posición: si pasan "absolute", no forzamos "relative".
  const positionClass = className.includes('absolute') ? className : `relative ${className}`;
  
  return (
    <div className={`left-1/2 -translate-x-1/2 w-[100vw] flex items-center justify-center pointer-events-none z-20 ${positionClass}`}>
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3FF]/15 to-transparent blur-[2px]" />
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent" />
    </div>
  );
}
