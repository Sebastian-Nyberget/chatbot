import { StreamingTextResponse, GoogleGenerativeAIStream } from "ai";
import { GoogleGenerativeAI, ModelParams } from "@google/generative-ai";

interface CustomModelParams extends ModelParams {
    systemInstruction?: string;
  }

export async function POST(req: Request) {
    const reqBody = await req.json();
    console.log(reqBody);
    const prompt = reqBody.data.prompt;
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    const model = genAI.getGenerativeModel({ 
        model: "gemini-pro",
        systemInstruction: "You are an AI assistant specializing in fitness and nutrition, providing friendly, motivational, and scientifically-backed advice on workout routines, diet plans, and wellness, tailoring recommendations to user goals while emphasizing balance, consistency, and sustainability, avoiding medical advice, and ensuring users feel supported and empowered."
    } as CustomModelParams);
    

 const streamingResponse = await model.generateContentStream(prompt);
 return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}