import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Pengujian menyeluruh (full coverage) untuk fungsi sum', () => {
  // 1. Skenario angka normal
  assert.strictEqual(sum(2, 3), 5);

  // 2. Skenario input bukan 'number' (harus return 0)
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum(null, undefined), 0);

  // 3. Skenario angka negatif (harus return 0)
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -2), 0);
  assert.strictEqual(sum(-3, -3), 0);
});
