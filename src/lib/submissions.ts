import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

export async function recordSubmission(
  kind: string,
  payload: Record<string, unknown>
) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const line =
    JSON.stringify({ ...payload, kind, submittedAt: new Date().toISOString() }) +
    "\n";
  await fs.appendFile(path.join(DATA_DIR, `${kind}.jsonl`), line, "utf8");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string) {
  return EMAIL_RE.test(value);
}
