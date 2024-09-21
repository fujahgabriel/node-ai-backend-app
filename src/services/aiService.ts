import OpenAI from "openai";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
    dangerouslyAllowBrowser: true,
  });


export async function generateAIResponse(prompt: string) {
  try {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user", content: prompt,
          },
        ],
        max_tokens: 450,
      });
    

    const aiResponse = response.choices[0].message?.content || "";

    // Save to database
    const savedResponse = await prisma.aIResponse.create({
      data: {
        prompt,
        response: aiResponse,
      },
    });

    return savedResponse;
  } catch (error:any) {
    throw new Error(`Failed to generate AI response: ${error?.message}`);
  }
}
