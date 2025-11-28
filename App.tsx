import React from 'react';
import { HeroOrb } from './components/HeroOrb';
import { GlassCard } from './components/GlassCard';
import { ChatBot } from './components/ChatBot';
import { ContactForm } from './components/ContactForm';
import { Project } from './types';
import { Github, Linkedin, Mail, Cpu, Terminal, Database, Code2, ExternalLink, GitBranch, Bot, Network, Layers, GraduationCap, MapPin, Briefcase } from 'lucide-react';

// Resume Data for Context
const RESUME_CONTEXT = `
Name: Abhishek Chaudhari
Role: AI Engineer
Location: Pune, Maharashtra
Email: abhishekchaudhari336@gmail.com
Phone: +91 8010304588
Education: Bachelor of Engineering in Artificial Intelligence and Data Science, Pune Institute of Computer Technology (2023-2027), CGPA: 9.51/10.0 (Till 4th Semester).
Skills: Python, C++, SQL, MongoDB, NLP, LangChain, LangGraph, Deep Learning, FastAPI, Google ADK, Git, Postman, Hugging Face, LLMs.
Experience: AI Intern at Tenancy Passport (Aug 2025 - Dec 2025). Designed and implemented a multi-modal Retrieval-Augmented Generation (RAG) system capable of intelligent document ingestion and retrieval. Features include Advanced Content Extraction from PDFs, DOCX, and PPTX, Multi-Model Embedding Support, and Secure Vector Search powered by MongoDB Atlas.
Projects:
1. Ayurveda Assistant – Agentic Healthcare Application. Developed an agentic healthcare assistant using RAG architecture, integrating OpenAI GPT, Google Search, MongoDB Atlas, and GCS. Built a personalized 7-day Ayurvedic diet planner with dosha-based meal recommendations and an interactive Q&A interface using FastAPI and Streamlit.
2. Medical Chatbot. Built a RAG-based medical chatbot using LangChain, LLaMA-3 70B, and Hugging Face embeddings (all-MiniLM-L6-v2) with a Pinecone vector database. Developed APIs with Flask.
3. AI-Based Job Recommendation System. Built a content-based recommendation system using TF-IDF vectorization of job attributes and cosine similarity scoring. Enhanced matching with fuzzy logic.
`;

const projects: Project[] = [
  {
    id: '1',
    title: 'Ayurveda Assistant',
    category: 'Agentic Healthcare',
    description: 'An agentic healthcare assistant utilizing RAG architecture with OpenAI GPT & Google Search. Features a personalized 7-day Ayurvedic diet planner based on user Doshas.',
    techStack: ['FastAPI', 'Streamlit', 'MongoDB Atlas', 'OpenAI', 'Google Search'],
    link: '#',
    repo: '#'
  },
  {
    id: '2',
    title: 'Medical Chatbot',
    category: 'RAG System',
    description: 'RAG-based medical knowledge assistant using LLaMA-3 70B and Pinecone. Retrieves and summarizes complex medical information with high accuracy.',
    techStack: ['LangChain', 'LLaMA-3', 'Pinecone', 'Flask', 'Hugging Face'],
    link: '#',
    repo: '#'
  },
  {
    id: '3',
    title: 'Job Recommendation System',
    category: 'NLP & Analytics',
    description: 'Content-based recommendation engine using TF-IDF and Cosine Similarity. Features fuzzy logic for robust matching of job attributes and skills.',
    techStack: ['Python', 'TF-IDF', 'Scikit-Learn', 'Fuzzy Logic'],
    link: '#',
    repo: '#'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-950 text-slate-300 font-sans selection:bg-champagne-400/30 selection:text-white relative scroll-smooth">
      
      {/* Background Gradient Field */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1b26] via-[#050510] to-black z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Navigation / Header */}
        <nav className="flex justify-between items-center mb-24 animate-float" style={{ animationDuration: '8s' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-champagne-400/40 rounded-full flex items-center justify-center bg-white/5 relative group cursor-pointer">
              <span className="font-mono text-xs text-champagne-200">AC</span>
              <div className="absolute inset-0 rounded-full border border-champagne-400/0 group-hover:border-champagne-400/60 group-hover:scale-110 transition-all duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-light tracking-[0.2em] text-white">ABHISHEK CHAUDHARI</span>
              <span className="text-[10px] font-mono text-white/40">AI ENGINEER // PUNE, IN</span>
            </div>
          </div>
          <div className="flex gap-6 text-xs font-mono tracking-widest text-white/50 hidden md:flex">
            <a href="#about" className="hover:text-champagne-300 transition-colors">BIO_DATA</a>
            <a href="#experience" className="hover:text-champagne-300 transition-colors">EXP_LOGS</a>
            <a href="#projects" className="hover:text-champagne-300 transition-colors">MODULES</a>
            <a href="#contact" className="hover:text-champagne-300 transition-colors">UPLINK</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center text-center mb-32 relative">
          <div className="mb-12">
            <HeroOrb />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] px-4">
            ARTIFICIAL INTELLIGENCE ENGINEER <span className="font-light text-champagne-200/90 whitespace-nowrap">Abhishek Chaudhari</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-400 font-light leading-relaxed">
            Designing end-to-end intelligent systems. <br className="hidden md:block"/>
            Specializing in RAG pipelines, Agentic AI, and Scalable Solutions.
          </p>
          
          <div className="mt-10 flex gap-4">
             <a href="#projects" className="px-6 py-2 border border-white/20 rounded-full text-xs font-mono tracking-widest text-white hover:bg-white/5 hover:border-champagne-300/50 transition-all">
               ACCESS PROJECTS
             </a>
             <a href="#chat" className="px-6 py-2 bg-champagne-500/10 border border-champagne-500/30 rounded-full text-xs font-mono tracking-widest text-champagne-200 hover:bg-champagne-500/20 transition-all flex items-center gap-2">
               <Terminal className="w-3 h-3" />
               QUERY DATABASE
             </a>
          </div>
        </header>

        {/* Interactive Chat Bot Section */}
        <section id="chat" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
            <h3 className="text-xs font-mono text-champagne-400/70 tracking-[0.3em] uppercase">Interactive Portfolio Assistant</h3>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
          </div>
          <ChatBot resumeContext={RESUME_CONTEXT} />
        </section>

        {/* About / Skills Grid */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 scroll-mt-24">
          <GlassCard className="col-span-1 md:col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
               <Bot className="w-5 h-5 text-champagne-400" />
               <h3 className="text-xl font-light text-white">Engineering Profile</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              I am a third-year AI & Data Science student at Pune Institute of Computer Technology (CGPA 9.51). My passion lies in building secure RAG pipelines and agentic assistants using modern stacks like LangChain, FastAPI, and Google ADK. I focus on creating scalable, user-centric AI solutions that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-champagne-400/30 transition-colors">
                    <Code2 className="w-4 h-4 text-champagne-400" />
                </div>
                <span>Python / C++</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-champagne-400/30 transition-colors">
                    <Database className="w-4 h-4 text-champagne-400" />
                </div>
                <span>MongoDB / SQL</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-champagne-400/30 transition-colors">
                    <Network className="w-4 h-4 text-champagne-400" />
                </div>
                <span>LangChain</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-champagne-400/30 transition-colors">
                    <Layers className="w-4 h-4 text-champagne-400" />
                </div>
                <span>Google ADK</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-champagne-400/30 transition-colors">
                    <Cpu className="w-4 h-4 text-champagne-400" />
                </div>
                <span>Deep Learning</span>
              </div>
               <div className="flex items-center gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-champagne-400/30 transition-colors">
                    <Terminal className="w-4 h-4 text-champagne-400" />
                </div>
                <span>FastAPI</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard glowColor="bronze" className="col-span-1 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-xs font-mono text-bronze-500/80 mb-6 uppercase tracking-widest flex items-center gap-2">
                 <GraduationCap className="w-3 h-3" /> 
                 Academic Record
              </h4>
              <div className="space-y-4">
                <div>
                   <div className="text-sm text-white font-medium">B.E. in AI & Data Science</div>
                   <div className="text-xs text-white/50 mb-1">Pune Institute of Computer Technology</div>
                   <div className="text-[10px] font-mono text-champagne-300">2023 - 2027</div>
                </div>
                <div className="h-[1px] bg-white/10"></div>
                <div className="flex justify-between items-center">
                   <span className="text-xs text-slate-300">CGPA</span>
                   <span className="text-sm font-mono text-green-400">9.51 / 10.0</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-right">
              <span className="text-[10px] font-mono text-white/30 flex justify-end items-center gap-2">
                <MapPin className="w-3 h-3" />
                PUNE, MAHARASHTRA
              </span>
            </div>
          </GlassCard>
        </section>

         {/* Experience Section */}
        <section id="experience" className="mb-32 scroll-mt-24">
           <h2 className="text-3xl font-thin text-white mb-8">PROFESSIONAL EXPERIENCE</h2>
           <GlassCard glowColor="white" className="relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Briefcase className="w-24 h-24" />
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-4 z-10 relative">
                 <div>
                    <h3 className="text-xl text-white font-light">AI Intern @ Tenancy Passport</h3>
                    <div className="text-sm text-champagne-400 font-mono mt-1">RAG Multi-Model Document Processing System</div>
                 </div>
                 <div className="text-xs font-mono text-white/40 mt-2 md:mt-0 border border-white/10 px-3 py-1 rounded-full h-fit">Aug 2025 - Dec 2025</div>
              </div>
              <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside z-10 relative">
                 <li>Designed and implemented a multi-modal <strong>Retrieval-Augmented Generation (RAG)</strong> system for intelligent document ingestion.</li>
                 <li>Advanced Content Extraction from <strong>PDFs, DOCX, and PPTX</strong> including tables and images.</li>
                 <li>Implemented Secure Vector Search powered by <strong>MongoDB Atlas</strong> with user-specific access controls.</li>
                 <li>Optimized for scalable, real-world document workflows.</li>
              </ul>
           </GlassCard>
        </section>


        {/* Projects */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-thin text-white">DEPLOYED MODULES</h2>
            <div className="hidden md:block text-[10px] font-mono text-white/30 tracking-widest">
              INDEXING: COMPLETED
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <GlassCard key={project.id} className="group hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 flex flex-col" glowColor="white">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[10px] font-mono text-champagne-400 border border-champagne-400/30 px-2 py-0.5 rounded-full bg-champagne-400/5">
                    {project.category}
                  </div>
                  <span className="text-[10px] font-mono text-white/20">0{idx + 1}</span>
                </div>
                
                <h3 className="text-xl font-light text-white mb-3 group-hover:text-champagne-200 transition-colors flex items-center gap-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                   <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(t => (
                        <span key={t} className="text-[10px] text-white/50 font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                            {t}
                        </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <a href={project.link} className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors">
                      <ExternalLink className="w-3 h-3" /> VIEW
                    </a>
                    <a href={project.repo} className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors">
                      <GitBranch className="w-3 h-3" /> CODE
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24 scroll-mt-24">
           <ContactForm />
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <h4 className="text-white font-light text-sm tracking-widest uppercase mb-1">Secure Channel</h4>
             <p className="text-slate-500 text-xs">Abhishek Chaudhari // +91 8010304588</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/40 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/40 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:abhishekchaudhari336@gmail.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/40 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </footer>
        
        <div className="text-center mt-12 mb-6">
           <span className="text-[10px] font-mono text-white/20">© 2025 ABHISHEK CHAUDHARI // SYSTEM ONLINE</span>
        </div>

      </div>
    </div>
  );
};

export default App;