import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { logger } from "./logger";

const DATA_DIR = join(process.cwd(), "data");
const DATA_FILE = join(DATA_DIR, "giveaway.json");

export interface GiveawayEntry {
  id: string;
  name: string;
  email: string;
  enteredAt: string;
}

function read(): GiveawayEntry[] {
  try {
    if (!existsSync(DATA_FILE)) return [];
    const raw = readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persist(entries: GiveawayEntry[]): void {
  try {
    mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
  } catch (err) {
    logger.error({ err }, "Failed to persist giveaway data");
  }
}

export function addEntry(name: string, email: string): { ok: boolean; duplicate: boolean; entry?: GiveawayEntry } {
  const entries = read();
  const existing = entries.find((e) => e.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return { ok: false, duplicate: true };
  }
  const entry: GiveawayEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    enteredAt: new Date().toISOString(),
  };
  entries.push(entry);
  persist(entries);
  return { ok: true, duplicate: false, entry };
}

export function getAllEntries(): GiveawayEntry[] {
  return read();
}
