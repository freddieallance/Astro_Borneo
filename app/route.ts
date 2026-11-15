import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const dynamic = 'force-dynamic';

const HTML_FILE_PATH = path.join(
  process.cwd(),
  'public',
  'assets',
  'aistudio',
  'AstroBorneo_Mission_Survival_Academy_Updated_Final_95c74f88.html'
);

export async function GET() {
  const html = await readFile(HTML_FILE_PATH, 'utf8');
  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
