import { openai } from '../config/openai';
import { loadEntries, InfoEntry } from './dataService';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export async function answerQuestion(
  history: ChatCompletionMessageParam[] = [],
  question: string
): Promise<ChatCompletionMessageParam> {
  const entries: InfoEntry[] = await loadEntries();
  const context = entries.map(e => `## ${e.title}\n${e.content}`).join('\n\n');

  const systemPrompt: ChatCompletionMessageParam = {
    role: 'system',
    content: `You are a knowledgeable assistant. Use the following info to answer questions succinctly:\n\n${context}`
  };

  const userPrompt: ChatCompletionMessageParam = {
    role: 'user',
    content: question
  };

  const messages = [systemPrompt, ...history, userPrompt];

  const resp = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
    max_tokens: 200,
  });

  return resp.choices[0].message as ChatCompletionMessageParam;
}
