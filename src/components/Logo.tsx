import React from 'react';

interface LogoProps {
  className?: string;
  size?: string;
}

/**
 * Beautiful high-fidelity SVG icon for the Creatorra logo
 * Consists of a stylized gradient 'C' and a play triangle centered inside.
 */
export function LogoIcon({ className = '', size = 'w-9 h-9' }: LogoProps) {
  return (
    <div className={`relative flex-shrink-0 ${size} ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full select-none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Color Science: Exact Electric Violet to Royal Indigo to Vivid Blue Gradient from uploads */}
          <linearGradient id="creatorraIconGradient" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#7A19FF" /> {/* Bright Electric Violet */}
            <stop offset="45%" stopColor="#5D36FF" /> {/* Power Indigo */}
            <stop offset="100%" stopColor="#387BFF" /> {/* Vivid Electric Blue */}
          </linearGradient>
        </defs>
        
        {/* The Thick Stylized 'C' Arc */}
        <path 
          d="M 68 28 
             A 30 30 0 1 0 68 72" 
          stroke="url(#creatorraIconGradient)" 
          strokeWidth="15" 
          strokeLinecap="round"
          strokeLinejoin="round" 
        />
        
        {/* Play Icon Triangle centered inside the C, slightly shifted right to feel balanced */}
        <path 
          d="M 45 35 
             L 70 50 
             L 45 65 
             Z" 
          fill="url(#creatorraIconGradient)"
          stroke="url(#creatorraIconGradient)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

interface LogoFullProps extends LogoProps {
  textClassName?: string;
  tagline?: boolean;
}

/**
 * Full Brand Logo component consisting of the Icon + tracked sleek text
 */
export function LogoFull({ className = '', size = 'w-9 h-9', textClassName = 'text-slate-900', tagline = false }: LogoFullProps) {
  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      {/* Brand Icon with exact gradient */}
      <LogoIcon size={size} />
      
      <div className="flex flex-col text-left">
        <span className={`font-display font-extrabold text-xl tracking-wide leading-none ${textClassName}`}>
          CREAT<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A19FF] to-[#387BFF]">O</span>RRA
        </span>
        {tagline && (
          <span className="font-mono text-[9px] text-slate-450 tracking-widest uppercase mt-0.5 font-semibold">
            CENTRAL ASIA
          </span>
        )}
      </div>
    </div>
  );
}
