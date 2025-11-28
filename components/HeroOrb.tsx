import React from 'react';

export const HeroOrb: React.FC = () => {
  return (
    <div className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center pointer-events-none select-none">

      {/* Background Rays */}
      <div className="absolute inset-0 flex items-center justify-center animate-spin-slow opacity-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-400 to-transparent absolute rotate-0"></div>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-400 to-transparent absolute rotate-45"></div>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-400 to-transparent absolute rotate-90"></div>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-400 to-transparent absolute rotate-135"></div>
      </div>

      {/* Rotating Rune Ring */}
      <div className="absolute inset-0 flex items-center justify-center animate-spin-reverse-slow opacity-50">
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full border border-dashed border-champagne-500/60"></div>
      </div>

      {/* The Triangle (Pyramid) */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(212,197,165,0.5)]">
          {/* Outer Triangle */}
          <polygon points="50,5 95,90 5,90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-champagne-200" />

          {/* Inner Grid / Circuit Lines */}
          <path d="M50,20 L50,85 M30,55 L70,55 M40,70 L60,70" stroke="currentColor" strokeWidth="0.1" className="text-champagne-500/30" />

          {/* Inner Rotating Triangle */}
          <g className="origin-center animate-[spin_10s_linear_infinite_reverse]">
            <polygon points="50,15 85,80 15,80" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-champagne-400/50" />
          </g>

          {/* Capstone Line */}
          <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="0.2" className="text-champagne-400/50" />
        </svg>

        {/* The All-Seeing Eye */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-6 md:w-12 md:h-8">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Sclera Shape */}
            <div className="absolute inset-0 border border-champagne-300/60 rounded-[100%] rotate-0 bg-space-950/80 backdrop-blur-sm overflow-hidden shadow-[inset_0_0_10px_rgba(212,197,165,0.2)]">
              {/* Iris/Pupil with Look Animation */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-champagne-100 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-look">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full"></div>
              </div>
              {/* Scanning Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-champagne-400/50 animate-scan shadow-[0_0_5px_rgba(212,197,165,0.8)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/2 w-1 h-1 bg-champagne-200 rounded-full shadow-[0_0_10px_white] animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-champagne-200 rounded-full shadow-[0_0_10px_white] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-champagne-200 rounded-full shadow-[0_0_10px_white] animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-10 left-20 w-0.5 h-0.5 bg-champagne-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 right-20 w-0.5 h-0.5 bg-champagne-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

    </div>
  );
};