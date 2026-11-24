import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 128 characters, under the 200-character cap.
// Half-believable (food poisoning), fresh (self-inflicted, shame punchline),
// twist on the last words — "mostly from shame."
const ENTRY =
  "Got food poisoning from my own cooking, which is impressive and humiliating in equal measure \u2014 I'm off today, mostly from shame.";

// Hard rules: write ONLY under MAKEFUN_OUTPUT_DIR (never a relative path,
// never process.cwd()), never remove the output dir, and copy nothing —
// entry.txt is the sole output file, so no dotfile can leak into /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
