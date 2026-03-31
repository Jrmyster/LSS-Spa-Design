import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { logger } from "./logger";

const DATA_DIR = join(process.cwd(), "artifacts/api-server/data");
const DATA_FILE = join(DATA_DIR, "coupon-claims.json");

export type CouponType = "MARCH20" | "REFER20";

export interface CouponClaim {
  id: string;
  name: string;
  email: string;
  coupon: CouponType;
  claimedAt: string;
}

function read(): CouponClaim[] {
  try {
    if (!existsSync(DATA_FILE)) return [];
    const raw = readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persist(claims: CouponClaim[]): void {
  try {
    mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(DATA_FILE, JSON.stringify(claims, null, 2), "utf-8");
  } catch (err) {
    logger.error({ err }, "Failed to persist coupon claims data");
  }
}

export function addClaim(
  name: string,
  email: string,
  coupon: CouponType
): { ok: boolean; duplicate: boolean; claim?: CouponClaim } {
  const claims = read();
  const existing = claims.find(
    (c) =>
      c.email.toLowerCase() === email.toLowerCase() &&
      c.coupon === coupon
  );
  if (existing) {
    return { ok: false, duplicate: true };
  }
  const claim: CouponClaim = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    coupon,
    claimedAt: new Date().toISOString(),
  };
  claims.push(claim);
  persist(claims);
  return { ok: true, duplicate: false, claim };
}

export function getAllClaims(): CouponClaim[] {
  return read();
}
