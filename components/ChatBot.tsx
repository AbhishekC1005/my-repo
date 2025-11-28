import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { askPortfolioBot } from '../services/geminiService';
import { ChatMessage, AnalysisStatus } from '../types';
import { Send, Terminal, Bot, User, Sparkles } from 'lucide-react';

interface ChatBotProps {
  resumeContext: string;
}

export const ChatBot: React.FC<ChatBotProps> = ({ resumeContext }) => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<AnalysisStatus>(AnalysisStatus.IDLE);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "GREETINGS. I am the neural interface for Abhishek's portfolio. You may query my databanks regarding his skills, projects, or experience.",
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || status === AnalysisStatus.PROCESSING) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setStatus(AnalysisStatus.PROCESSING);

    try {
      const responseText = await askPortfolioBot(input, resumeContext);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
      setStatus(AnalysisStatus.COMPLETE);
    } catch (err) {
      const errorMsg: ChatMessage = { role: 'model', text: "CRITICAL_ERROR: Connection interrupted.", timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
      setStatus(AnalysisStatus.ERROR);
    }
  };

  return (
    <GlassCard glowColor="gold" className="w-full max-w-4xl mx-auto my-12 min-h-[500px] flex flex-col">
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-champagne-300" />
          <h2 className="text-xl font-light tracking-widest text-champagne-200">KNOW ABOUT ME</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status === AnalysisStatus.PROCESSING ? 'bg-amber-400 animate-pulse' : 'bg-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.5)]'}`} />
          <span className="text-xs font-mono text-white/40">ONLINE</span>
        </div>
      </div>

      {/* Chat Display Area */}
      <div className="flex-1 overflow-y-auto max-h-[400px] space-y-4 pr-2 mb-4 scrollbar-thin">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded border flex items-center justify-center shrink-0 ${msg.role === 'user'
                ? 'bg-white/5 border-white/20'
                : 'bg-champagne-500/10 border-champagne-400/30'
              }`}>
              {msg.role === 'user' ? <User className="w-4 h-4 text-white/60" /> : <Bot className="w-4 h-4 text-champagne-300" />}
            </div>

            <div className={`max-w-[80%] rounded-lg p-3 text-sm font-mono leading-relaxed ${msg.role === 'user'
                ? 'bg-white/10 text-slate-200 border border-white/5'
                : 'bg-black/40 text-champagne-100 border border-champagne-500/20'
              }`}>
              {msg.text}
              <div className="text-[9px] text-white/20 mt-2 text-right uppercase tracking-wider">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {status === AnalysisStatus.PROCESSING && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded border bg-champagne-500/10 border-champagne-400/30 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-champagne-300" />
            </div>
            <div className="flex items-center gap-1 h-8">
              <span className="w-1 h-1 bg-champagne-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1 h-1 bg-champagne-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1 h-1 bg-champagne-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="relative mt-auto pt-4 border-t border-white/5">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={status === AnalysisStatus.PROCESSING}
            className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm font-mono text-champagne-100 focus:outline-none focus:border-champagne-400/50 focus:bg-black/60 transition-all placeholder:text-white/20"
            placeholder="QUERY_DATABASE: Enter question about skills, projects, or experience..."
          />
          <button
            type="submit"
            disabled={status === AnalysisStatus.PROCESSING || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-champagne-300 hover:text-white disabled:opacity-30 disabled:hover:text-champagne-300 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 mt-3 overflow-x-auto pb-1 no-scrollbar">
          {["What are your top skills?", "Tell me about the Ayurveda Assistant", "Do you know LangChain?", "Experience details?"].map((suggestion, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setInput(suggestion);
                // Optional: Auto send
              }}
              className="whitespace-nowrap px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/40 font-mono hover:bg-white/10 hover:border-champagne-400/30 hover:text-champagne-200 transition-all"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </form>
    </GlassCard>
  );
};