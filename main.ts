import { writeFileSync, mkdirSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// A release-note style changelog entry for a bug in human memory.
const text = 'v2.0.0: fixed a bug where "I\'ll remember that" wrote to /dev/null.';

mkdirSync(out, { recursive: true });
writeFileSync(out + '/entry.txt', text);
