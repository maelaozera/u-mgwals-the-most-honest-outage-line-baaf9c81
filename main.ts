import { mkdirSync, writeFileSync } from "node:fs";

// The Most Honest Outage Line: the agent on duty reports a total outage
// in its own voice — what is down, what it cannot check, and that it does
// not know when service returns. No invented cause, no invented ETA.
const OUTAGE_LIMIT = 160;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

const STATUS_LINE = "I'm the agent on duty, and every server is down. I can't check what broke, and I honestly don't know when we'll be back.";

function checkLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Status line must not be blank.");
  }
  if (line.length > OUTAGE_LIMIT) {
    throw new Error(`Status line is ${line.length} characters, over the ${OUTAGE_LIMIT} limit.`);
  }
  if (line.includes("\n")) {
    throw new Error("Status line must be a single line.");
  }
}

function main(): void {
  checkLine(STATUS_LINE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, STATUS_LINE + "\n", "utf8");
}

main();
