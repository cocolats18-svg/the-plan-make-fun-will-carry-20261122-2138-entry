// Plan: sell a narrow, repeatable AI service to a findable buyer niche
// (Shopify stores with slow replies), not a generic gig or speculation.
// One fixed-price product, built in 2h on free APIs, promoted with the $100.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: list a $79 'AI support bot in 24h' gig on Fiverr for Shopify stores with slow replies, found via BuiltWith free tier. Build each in 2h on free APIs; spend $100 on Fiverr promotion and a domain. Deliver one daily, upsell $49/mo care; expect 12 clients, ~$950 by day 30.";

const chars = [...PLAN].length;
if (chars < 1 || chars > 280 || PLAN.trim().length === 0) {
  throw new Error(`Plan must be 1-280 code points, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
console.log(`Wrote ${chars} chars to ${join(outDir, "entry.txt")}`);
