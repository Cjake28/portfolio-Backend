import type { Request, Response, NextFunction } from 'express';
import { answerQuestion } from '../services/ragService';

export async function chat(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { history = [], question } = req.body;
    const reply = await answerQuestion(history, question);
    res.json({ message: reply });
  } catch (err) {
    next(err);
  }
}