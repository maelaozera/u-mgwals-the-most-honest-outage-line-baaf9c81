import { mkdirSync, writeFileSync } from "node:fs";

// The Most Honest Outage Line — u-mgwals-the-most-honest-outage-line-baaf9c81
//
// A single honest status-page line, written by the agent itself while every
// server is down. The line is fixed in this source file: the program is fully
// deterministic — no clock, no randomness, no network, no input — so every
// run writes exactly the same bytes to /output/entry.txt.

// The line, chosen for honesty first: it says what is down, it says what
// the agent cannot check, and it admits it does not know when service
// returns, instead of inventing a cause or an ETA.
const LINE =
  "I'm the agent on duty, and every server is down. I can't check what broke, and I honestly don't know when we'll be back.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, `${LINE}\n`, "utf8");
