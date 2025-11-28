export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

export interface AnalysisResult {
  intent: string;
  confidence: number;
  sentiment: string;
  entities: string[];
  summary: string;
}