import fs from 'fs/promises';
import path from 'path';

export interface InfoEntry {
  id: string;
  title: string;
  content: string;
}

const DATA_FILE = path.resolve('src/data/info.json');

export async function loadEntries(): Promise<InfoEntry[]> {
  const raw = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(raw) as InfoEntry[];
}

