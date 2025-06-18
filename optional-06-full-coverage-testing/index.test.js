import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// 1.Valid input (angka positif)
test('Menjumlahkan dua bilangan positif', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5, '2 + 3 harus sama dengan 5');
});

// 2.Valid input (angka nol)
test('Menjumlahkan bilangan positif dan nol', () => {
  const result = sum(5, 0);
  assert.strictEqual(result, 5, '5 + 0 harus sama dengan 5');
});

// 3.Invalid input (bukan number)
test('Menjumlahkan input bukan number', () => {
  const result1 = sum('2', 3); // Input pertama bukan number
  assert.strictEqual(result1, 0, 'Input pertama bukan number, harus mengembalikan 0');

  const result2 = sum(2, '3'); // Input kedua bukan number
  assert.strictEqual(result2, 0, 'Input kedua bukan number, harus mengembalikan 0');

  const result3 = sum('2', '3'); // Kedua input bukan number
  assert.strictEqual(result3, 0, 'Kedua input bukan number, harus mengembalikan 0');
});

// 4.Negative input (angka negatif)
test('Menjumlahkan bilangan negatif', () => {
  const result1 = sum(-1, 3); // Input pertama negatif
  assert.strictEqual(result1, 0, 'Input pertama negatif, harus mengembalikan 0');

  const result2 = sum(2, -3); // Input kedua negatif
  assert.strictEqual(result2, 0, 'Input kedua negatif, harus mengembalikan 0');

  const result3 = sum(-1, -3); // Kedua input negatif
  assert.strictEqual(result3, 0, 'Kedua input negatif, harus mengembalikan 0');
});

// 5.Boundary case (angka nol dan positif)
test('Menjumlahkan angka nol dan positif', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0, '0 + 0 harus sama dengan 0');
});