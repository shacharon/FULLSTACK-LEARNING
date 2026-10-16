// Tiny runner used by the mentor: npm run check -- 01 | npm run experiment -- 01 | npm run typecheck
// Copied from BIG-O-LEARNING/scripts/lesson.mjs (originally ai-agentic-lecture) on 2026-10-16, unchanged apart from this comment.
import { existsSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const [command, id] = process.argv.slice(2);
const run = (cmd, args) => spawnSync(cmd, args, { stdio: 'inherit', shell: false }).status ?? 1;
const hasTs = (dir) => existsSync(dir) && readdirSync(dir, { recursive: true }).some((f) => String(f).endsWith('.ts'));

if (command === 'typecheck') {
  if (!hasTs('lessons')) { console.log('No lesson files yet: nothing to type-check.'); process.exit(0); }
  process.exit(run('npx', ['tsc', '--noEmit']));
}

const lesson = id && existsSync('lessons') ? readdirSync('lessons').find((d) => d.startsWith(`${id.padStart(2, '0')}-`)) : undefined;
if (!lesson) { console.error(`Lesson "${id ?? ''}" has not been started (no folder lessons/NN-*). Say "start lesson N".`); process.exit(1); }
const dir = join('lessons', lesson);

if (command === 'experiment') {
  const file = join(dir, 'experiment.ts');
  if (!existsSync(file)) { console.error(`Lesson ${id} has no experiment.ts.`); process.exit(1); }
  process.exit(run('npx', ['tsx', file]));
}
if (command === 'check') {
  const tests = run('npx', ['vitest', 'run', dir]);
  const types = run('npx', ['tsc', '--noEmit']);
  console.log(`\ncheck ${id}: tests ${tests === 0 ? 'PASS' : 'FAIL'}, tsc ${types === 0 ? 'PASS' : 'FAIL'}`);
  process.exit(tests === 0 && types === 0 ? 0 : 1);
}
console.error('Usage: npm run check -- NN | npm run experiment -- NN | npm run typecheck');
process.exit(1);
