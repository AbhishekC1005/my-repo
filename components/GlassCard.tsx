import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'white' | 'gold' | 'bronze';
  noPadding?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'white',
  noPadding = false
}) => {
  
  const borderColor = glowColor === 'gold' ? 'border-champagne-300/20' : 
                      glowColor === 'bronze' ? 'border-bronze-500/20' : 
                      'border-white/10';

  const shadowGlow = glowColor === 'gold' ? 'hover:shadow-[0_0_20px_rgba(212,197,165,0.1)]' :
                     glowColor === 'bronze' ? 'hover:shadow-[0_0_20px_rgba(205,127,50,0.1)]' :
                     'hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]';

  return (
    <div className={`
      relative overflow-hidden
      glass-panel
      ${borderColor}
      ${shadowGlow}
      transition-all duration-500 ease-out
      rounded-xl
      ${noPadding ? '' : 'p-6'}
      ${className}
    `}>
      {/* Decorative Corner HUD elements */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 rounded-tl-sm" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 rounded-tr-sm" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 rounded-bl-sm" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 rounded-br-sm" />
      
      {/* Scanline texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{ backgroundSize: "100% 2px, 3px 100%" }}></div>

      {children}
    </div>
  );
};
