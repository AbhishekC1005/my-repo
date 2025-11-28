import React, { useState } from 'react';
import { Code2, Database, Network, Layers, Cpu, Terminal, GitBranch, Box, LayoutGrid, Play, FlaskConical, Brain } from 'lucide-react';

interface Skill {
    name: string;
    icon: React.ReactNode;
}

const skills: Skill[] = [
    { name: 'Python', icon: <Code2 className="w-4 h-4" /> },
    { name: 'C++', icon: <Code2 className="w-4 h-4" /> },
    { name: 'SQL', icon: <Database className="w-4 h-4" /> },
    { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
    { name: 'FastAPI', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Flask', icon: <FlaskConical className="w-4 h-4" /> },
    { name: 'LangChain', icon: <Network className="w-4 h-4" /> },
    { name: 'LangGraph', icon: <Network className="w-4 h-4" /> },
    { name: 'Llama-3', icon: <Brain className="w-4 h-4" /> },
    { name: 'Hugging Face', icon: <Brain className="w-4 h-4" /> },
    { name: 'OpenAI', icon: <Brain className="w-4 h-4" /> },
    { name: 'Pinecone', icon: <Database className="w-4 h-4" /> },
    { name: 'Google ADK', icon: <Layers className="w-4 h-4" /> },
    { name: 'Streamlit', icon: <LayoutGrid className="w-4 h-4" /> },
    { name: 'NLP', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Deep Learning', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Scikit-Learn', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Git', icon: <GitBranch className="w-4 h-4" /> },
    { name: 'Postman', icon: <Box className="w-4 h-4" /> },
];

export const SkillsCarousel: React.FC = () => {
    const [isGrid, setIsGrid] = useState(false);

    return (
        <div className="w-full relative group">
            {/* Controls */}
            <div className="absolute -top-12 right-0 flex gap-2">
                <button
                    onClick={() => setIsGrid(false)}
                    className={`p-1.5 rounded-md transition-all ${!isGrid ? 'bg-champagne-500/20 text-champagne-200' : 'text-white/20 hover:text-white/60'}`}
                    title="Auto Scroll"
                >
                    <Play className="w-3 h-3" />
                </button>
                <button
                    onClick={() => setIsGrid(true)}
                    className={`p-1.5 rounded-md transition-all ${isGrid ? 'bg-champagne-500/20 text-champagne-200' : 'text-white/20 hover:text-white/60'}`}
                    title="Grid View"
                >
                    <LayoutGrid className="w-3 h-3" />
                </button>
            </div>

            {isGrid ? (
                <div className="flex flex-wrap gap-3 animate-in fade-in duration-500">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-champagne-400/30 transition-all cursor-default group/skill"
                        >
                            <div className="text-champagne-400 group-hover/skill:text-champagne-300 transition-colors">
                                {skill.icon}
                            </div>
                            <span className="text-xs font-mono text-slate-300 group-hover/skill:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="overflow-hidden py-2 relative">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-space-950 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-space-950 to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-4 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
                        {[...skills, ...skills].map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-champagne-400/30 transition-all cursor-default group/skill"
                            >
                                <div className="text-champagne-400 group-hover/skill:text-champagne-300 transition-colors">
                                    {skill.icon}
                                </div>
                                <span className="text-sm font-mono text-slate-300 group-hover/skill:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
