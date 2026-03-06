import { mkdir, appendFile, access } from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data", "submissions");

function csvEscape(value: string) {
  const v = String(value ?? "");
  if (/[",\n]/.test(v)) {
    return `"${v.replace(/"/g, '""')}"`;
  }
  return v;
}

export async function appendCsvRow(fileName: string, headers: string[], row: Record<string, string>) {
  await mkdir(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, fileName);

  let needsHeader = false;
  try {
    await access(filePath);
  } catch {
    needsHeader = true;
  }

  const line = headers.map((h) => csvEscape(row[h] ?? "")).join(",") + "\n";
  if (needsHeader) {
    const headerLine = headers.map(csvEscape).join(",") + "\n";
    await appendFile(filePath, headerLine + line, "utf8");
    return;
  }
  await appendFile(filePath, line, "utf8");
}

export async function ensureUploadDir(subPath: string) {
  const dir = path.join(process.cwd(), "data", "uploads", subPath);
  await mkdir(dir, { recursive: true });
  return dir;
}
