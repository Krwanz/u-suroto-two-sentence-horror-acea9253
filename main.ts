// Two-Sentence Horror — make.fun entry u-suroto-two-sentence-horror-acea9253
// Node 22, standard library only. Writes the story to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to /output when the variable is unset).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "For three weeks, the flat below mine has stood empty, yet every night at 3 in the morning I hear someone down there rehearsing my laugh. " +
  "Last night the laughing stopped, and a voice exactly like mine whispered through the floorboards: 'I've got it now.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(`wrote ${STORY.length} chars to ${join(outDir, "entry.txt")}`);
