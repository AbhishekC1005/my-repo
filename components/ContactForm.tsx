import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Send, Terminal, Loader2, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate network delay
    setTimeout(() => {
      setFormState('sent');
      // Reset after a delay
      setTimeout(() => setFormState('idle'), 3000);
    }, 2000);
  };

  return (
    <GlassCard glowColor="bronze" className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
        <Terminal className="w-5 h-5 text-bronze-500" />
        <h2 className="text-xl font-light tracking-widest text-champagne-200">INITIATE_TRANSMISSION</h2>
      </div>

      {formState === 'sent' ? (
        <div className="h-64 flex flex-col items-center justify-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
          </div>
          <p className="text-champagne-200 font-mono tracking-widest">TRANSMISSION RECEIVED</p>
          <p className="text-xs text-white/40 font-mono">PACKET ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Identity Code (Name)</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-sm text-champagne-100 focus:outline-none focus:border-champagne-400/50 focus:bg-black/40 transition-all font-mono placeholder:text-white/10"
                placeholder="ENTER_ID"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Frequency (Email)</label>
              <input 
                type="email" 
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-sm text-champagne-100 focus:outline-none focus:border-champagne-400/50 focus:bg-black/40 transition-all font-mono placeholder:text-white/10"
                placeholder="USER@NET.COM"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Data Packet (Message)</label>
            <textarea 
              required
              rows={4}
              className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-sm text-champagne-100 focus:outline-none focus:border-champagne-400/50 focus:bg-black/40 transition-all resize-none font-mono placeholder:text-white/10"
              placeholder="ENTER MESSAGE CONTENT..."
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={formState === 'sending'}
              className="group relative px-6 py-3 bg-champagne-500/10 hover:bg-champagne-500/20 border border-champagne-500/30 text-champagne-300 font-mono text-xs tracking-widest uppercase transition-all overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {formState === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Uplinking...
                  </>
                ) : (
                  <>
                    Transmit
                    <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-champagne-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </form>
      )}
    </GlassCard>
  );
};