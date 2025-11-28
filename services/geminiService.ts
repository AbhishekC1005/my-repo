import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askPortfolioBot = async (question: string, context: string): Promise<string> => {
  if (!apiKey) {
    return "ACCESS_DENIED: API Key missing. Please configure secure credentials.";
  }

  const systemInstruction = `You are a futuristic AI assistant for Abhishek Chaudhari's portfolio interface. 
  Your task is to answer questions about Abhishek based ONLY on the provided context (his resume/portfolio data).
  
  Context Data:
  ${context}
  
  Guidelines:
  1. Keep answers concise, professional, and slightly technical in tone (matching a sci-fi interface).
  2. If the answer is not in the context, state "DATA_NOT_FOUND" in a creative way (e.g., "Information not present in current memory banks").
  3. Do not make up facts.
  4. Format key terms or technologies in a way that stands out if possible (though plain text is fine).
  5. Act as if you are the "System Interface" for his portfolio.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "SIGNAL_LOST: No response generated.";

  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "SYSTEM_ERROR: Uplink failed. Please retry transmission.";
  }
};

export const analyzeText = async (text: string): Promise<AnalysisResult> => {
  if (!apiKey) {
    throw new Error("ACCESS_DENIED: API Key missing.");
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyze the following text input: "${text}"`,
      config: {
        systemInstruction: `You are a semantic analysis engine. Analyze the user input and provide structured data.
        - intent: What is the user trying to do?
        - confidence: A score between 0 and 1 regarding how confident you are in this analysis.
        - sentiment: Positive, Negative, or Neutral.
        - entities: Extract key technical terms, names, or locations.
        - summary: A very brief summary of the text (max 1 sentence).`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            intent: { type: Type.STRING },
            confidence: { type: Type.NUMBER },
            sentiment: { type: Type.STRING },
            entities: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            summary: { type: Type.STRING },
          },
          required: ["intent", "confidence", "sentiment", "entities", "summary"],
        },
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AnalysisResult;
    }
    throw new Error("No data returned");
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};