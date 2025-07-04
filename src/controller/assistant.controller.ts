// controllers/chatController.ts
import { Request, Response, NextFunction } from "express";
import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handleChat = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { history, message } = req.body;
    if (!history || !Array.isArray(history) || typeof message !== 'string') {
      res.status(400).json({ error: "Request must include history (array) and message (string)." });
      return;
    }

    // Build messages: existing history + new user message
    const messages = [...history, { role: "user", content: message }];

    // Call the Assistant
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      messages,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Chat failed. Try again later." });
  }
};