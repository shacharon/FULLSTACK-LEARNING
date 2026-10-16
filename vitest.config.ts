import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: { include: ['lessons/**/*.test.ts'], environment: 'node' },
});
