import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// 1.Menjumlahkan dua bilangan positif
test('Menjumlahkan dua bilangan positif', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5, '2 + 3 harus sama dengan 5');
});

// 2.Menjumlahkan bilangan positif dan nol
test('Menjumlahkan bilangan positif dan nol', () => {
  const result = sum(5, 0);
  assert.strictEqual(result, 5, '5 + 0 harus sama dengan 5');
});

// 3.Menjumlahkan bilangan negatif dan positif
test('Menjumlahkan bilangan negatif dan positif', () => {
  const result = sum(-1, 1);
  assert.strictEqual(result, 0, '-1 + 1 harus sama dengan 0');
});

// 4.Menjumlahkan dua bilangan negatif
test('Menjumlahkan dua bilangan negatif', () => {
  const result = sum(-2, -3);
  assert.strictEqual(result, -5, '-2 + -3 harus sama dengan -5');
});

// 5.Menjumlahkan bilangan desimal
test('Menjumlahkan bilangan desimal', () => {
  const result = sum(1.5, 2.5);
  assert.strictEqual(result, 4, '1.5 + 2.5 harus sama dengan 4');
});