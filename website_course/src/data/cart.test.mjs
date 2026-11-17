// Self-check keranjang. Jalankan: node --test src/data/cart.test.mjs
// (butuh Node >= 18). Tidak ada framework — hanya `node:assert`.
//
// Modul aslinya `.js` dengan `import { useSyncExternalStore } from 'react'`,
// jadi logika murni diuji lewat salinan kecil di bawah; yang diverifikasi
// adalah kontrak `localStorage`: array slug, tahan nilai rusak, tahan mode privat.
import assert from 'node:assert/strict';
import test from 'node:test';

function readList(storage, key) {
  try {
    const value = JSON.parse(storage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeList(storage, key, list) {
  try {
    storage.setItem(key, JSON.stringify(list));
  } catch {
    /* mode privat */
  }
}

function makeStorage(initial = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => map.set(k, v),
    raw: (k) => map.get(k),
  };
}

test('kosong → array kosong', () => {
  assert.deepEqual(readList(makeStorage(), 'il_cart'), []);
});

test('JSON rusak → array kosong, bukan crash', () => {
  assert.deepEqual(readList(makeStorage({ il_cart: '{bukan json' }), 'il_cart'), []);
});

test('bukan array (objek/number) → array kosong', () => {
  assert.deepEqual(readList(makeStorage({ il_cart: '{"a":1}' }), 'il_cart'), []);
  assert.deepEqual(readList(makeStorage({ il_cart: '5' }), 'il_cart'), []);
});

test('tulis lalu baca: array slug utuh', () => {
  const s = makeStorage();
  writeList(s, 'il_cart', ['excel-made-easy', 'data-driven']);
  assert.deepEqual(readList(s, 'il_cart'), ['excel-made-easy', 'data-driven']);
  assert.equal(s.raw('il_cart'), '["excel-made-easy","data-driven"]');
});

test('toggle: tambah kalau belum ada, hapus kalau sudah', () => {
  const toggle = (list, slug) =>
    list.includes(slug) ? list.filter((id) => id !== slug) : [...list, slug];

  assert.deepEqual(toggle([], 'excel-made-easy'), ['excel-made-easy']);
  assert.deepEqual(toggle(['excel-made-easy'], 'excel-made-easy'), []);
});

test('storage yang melempar (mode privat) tidak menjatuhkan tulis', () => {
  const broken = {
    getItem: () => {
      throw new Error('blocked');
    },
    setItem: () => {
      throw new Error('blocked');
    },
  };
  assert.deepEqual(readList(broken, 'il_cart'), []);
  assert.doesNotThrow(() => writeList(broken, 'il_cart', ['x']));
});
