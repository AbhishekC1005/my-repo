import React from 'react';

export const HeroOrb: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center pointer-events-none select-none">
      
      {/* Central Core Glow */}
      <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-champagne-500/10 blur-2xl animate-pulse-slow"></div>
      
      {/* The Glass Nucleus */}
      <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden z-20">
         <div className="absolute inset-0 bg-space-950/40"></div>
         {/* Internal Scanning Laser */}
         <div className="absolute w-full h-[2px] bg-champagne-300/50 shadow-[0_0_10px_rgba(212,197,165,0.8)] animate-scan"></div>
         {/* Inner Grid */}
         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      </div>

      {/* Gyroscopic Ring 1 (Vertical-ish) */}
      <div className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/5 border-t-champagne-300/30 border-b-champagne-300/30 animate-spin-slow z-10"></div>
      
      {/* Gyroscopic Ring 2 (Horizontal-ish) */}
      <div className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full border border-dashed border-white/10 animate-[spin_15s_linear_infinite_reverse] z-10"></div>

      {/* Outer Bracket HUD Elements */}
      <div className="absolute w-56 h-56 md:w-80 md:h-80 opacity-30 animate-pulse-slow">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-champagne-500/50"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-champagne-500/50"></div>
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-champagne-500/50"></div>
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-champagne-500/50"></div>
      </div>

      {/* Connecting Data Lines */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-1/2 left-0 -z-10"></div>
      <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent left-1/2 top-0 -z-10"></div>

      {/* Floating Particles (Static Geometry) */}
      <div className="absolute top-10 right-20 w-1 h-1 bg-white/40 rounded-full animate-ping [animation-duration:4s]"></div>
      <div className="absolute bottom-16 left-16 w-1 h-1 bg-champagne-400/60 rounded-full animate-ping [animation-duration:5s]"></div>

    </div>
  );
};