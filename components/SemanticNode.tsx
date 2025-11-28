import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { analyzeText } from '../services/geminiService';
import { AnalysisResult, AnalysisStatus } from '../types';
import { Send, Activity, ShieldCheck, Brain, FileText, Zap } from 'lucide-react';

export const SemanticNode: React.FC = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<AnalysisStatus>(AnalysisStatus.IDLE);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setStatus(AnalysisStatus.PROCESSING);
    setResult(null);

    try {
      const data = await analyzeText(input);
      setResult(data);
      setStatus(AnalysisStatus.COMPLETE);
    } catch (e) {
      setStatus(AnalysisStatus.ERROR);
    }
  };

  return (
    <GlassCard glowColor="gold" className="w-full max-w-4xl mx-auto my-12">
      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <Brain className="w-5 h-5 text-champagne-300" />
          <h2 className="text-xl font-light tracking-widest text-champagne-200">SEMANTIC_ANALYSIS_NODE</h2>
        </div>
        <div className="flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full ${status === AnalysisStatus.PROCESSING ? 'bg-amber-400 animate-pulse' : 'bg-green-500/50'}`} />
           <span className="text-xs font-mono text-white/40">v2.5.0-FLASH</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Input Sector */}
        <div className="space-y-4">
          <label className="text-xs font-mono text-white/50 uppercase tracking-widest">Input Stream</label>
          <div className="relative group">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-48 bg-black/20 border border-white/10 rounded-lg p-4 text-sm font-light text-slate-300 focus:outline-none focus:border-champagne-400/50 focus:bg-black/40 transition-all resize-none font-mono"
              placeholder="Enter text for holographic decomposition..."
            />
            <button
              onClick={handleAnalyze}
              disabled={status === AnalysisStatus.PROCESSING || !input}
              className="absolute bottom-4 right-4 bg-champagne-500/20 hover:bg-champagne-500/30 text-champagne-200 border border-champagne-500/30 rounded-full p-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {status === AnalysisStatus.PROCESSING ? <Activity className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Output Hologram */}
        <div className="relative min-h-[200px] flex flex-col">
          <label className="text-xs font-mono text-white/50 uppercase tracking-widest mb-4">Analysis Output</label>
          
          {status === AnalysisStatus.IDLE && (
            <div className="flex-1 flex flex-col items-center justify-center text-white/20 border border-dashed border-white/10 rounded-lg">
              <Zap className="w-8 h-8 mb-2 opacity-50" />
              <span className="text-xs font-mono">AWAITING DATA STREAM</span>
            </div>
          )}

          {status === AnalysisStatus.PROCESSING && (
            <div className="flex-1 flex flex-col items-center justify-center border border-white/5 bg-white/5 rounded-lg animate-pulse">
               <span className="text-xs font-mono text-champagne-200">PROCESSING TENSORS...</span>
            </div>
          )}

          {status === AnalysisStatus.COMPLETE && result && (
            <div className="space-y-4 animate-fadeIn">
              
              {/* Intent & Confidence */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-3 rounded border-l-2 border-champagne-400">
                  <div className="text-[10px] text-white/40 uppercase font-mono mb-1">Detected Intent</div>
                  <div className="text-sm text-white">{result.intent}</div>
                </div>
                <div className="bg-white/5 p-3 rounded border-l-2 border-green-500/50">
                  <div className="text-[10px] text-white/40 uppercase font-mono mb-1">Confidence Score</div>
                  <div className="text-sm text-green-300 font-mono">{(result.confidence * 100).toFixed(1)}%</div>
                </div>
              </div>

              {/* Sentiment */}
              <div className="bg-white/5 p-3 rounded border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <ShieldCheck className="w-4 h-4 text-white/40" />
                   <span className="text-xs font-mono text-white/60">SENTIMENT</span>
                </div>
                <span className={`text-sm font-medium ${
                  result.sentiment.toLowerCase().includes('positive') ? 'text-green-300' : 
                  result.sentiment.toLowerCase().includes('negative') ? 'text-red-300' : 'text-slate-300'
                }`}>
                  {result.sentiment.toUpperCase()}
                </span>
              </div>

              {/* Entities */}
              <div>
                <div className="text-[10px] text-white/40 uppercase font-mono mb-2">Extracted Entities</div>
                <div className="flex flex-wrap gap-2">
                  {result.entities.map((entity, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 rounded">
                      {entity}
                    </span>
                  ))}
                  {result.entities.length === 0 && <span className="text-xs text-white/20 italic">No specific entities detected.</span>}
                </div>
              </div>

              {/* Summary */}
              <div className="mt-2">
                 <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-3 h-3 text-white/40" />
                    <span className="text-[10px] text-white/40 uppercase font-mono">Summary</span>
                 </div>
                 <p className="text-xs text-slate-400 leading-relaxed border-l border-white/10 pl-3">
                   {result.summary}
                 </p>
              </div>

            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
};
