import { Request, Response } from 'express';
import { generateAIResponse } from '../services/aiService';

export async function handleAIRequest(req: Request, res: Response) {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: 'Prompt is required' });
  }

  try {
    const aiResponse = await generateAIResponse(prompt);
    return res.status(200).json(aiResponse);
  } catch (error:any) {
    return res.status(500).json({ message: error?.message });
  }
}
