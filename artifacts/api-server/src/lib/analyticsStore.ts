import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { logger } from "./logger";

const DATA_DIR = join(process.cwd(), "data");
const DATA_FILE = join(DATA_DIR, "analytics.json");

interface AnalyticsData {
  visits: number;
  bookingClicks: number;
}

function read(): AnalyticsData {
  try {
    if (!existsSync(DATA_FILE)) {
      return { visits: 0, bookingClicks: 0 };
    }
    const raw = readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      visits: Number(parsed.visits) || 0,
      bookingClicks: Number(parsed.bookingClicks) || 0,
    };
  } catch {
    return { visits: 0, bookingClicks: 0 };
  }
}

function persist(data: AnalyticsData): void {
  try {
    mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    logger.error({ err }, "Failed to persist analytics data");
  }
}

export function incrementVisits(): AnalyticsData {
  const data = read();
  data.visits += 1;
  persist(data);
  return data;
}

export function incrementBookingClicks(): AnalyticsData {
  const data = read();
  data.bookingClicks += 1;
  persist(data);
  return data;
}

export function getStats(): AnalyticsData & { conversionRate: string } {
  const data = read();
  const rate =
    data.visits > 0
      ? ((data.bookingClicks / data.visits) * 100).toFixed(1)
      : "0.0";
  return { ...data, conversionRate: rate };
}
