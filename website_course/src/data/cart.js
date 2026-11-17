// Keranjang & wishlist lokal per browser. Belum ada auth/backend, jadi
// `localStorage` satu-satunya sumber kebenaran. Dibaca lewat
// `useSyncExternalStore` supaya Navbar & CourseCard tetap sinkron tanpa
// Context/Provider.
//
// Kuncinya `slug`, BUKAN `id` numerik: `bootcamp/data.js` menyalin kursus
// dengan `id` = slug, jadi id numerik membuat keranjang & wishlist tidak
// sinkron antar halaman (hati di /bootcamp tidak menyala).
//
// ponytail: isi `il_cart` hanya slug, detail kursus dibaca ulang dari
// `data/courses.js` saat render. Gambar adalah import ber-hash, tidak boleh
// disimpan sebagai string — akan usang tiap build.
import { useSyncExternalStore } from 'react';

const CART_KEY = 'il_cart';
const WISHLIST_KEY = 'il_wishlist';

function readList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch {
    // localStorage diblokir (mode privat) atau isinya rusak.
    return [];
  }
}

function writeList(key, list) {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch {
    // Kuota penuh / diblokir: abaikan, jangan sampai UI gagal render.
  }
}

function createStore(key) {
  let snapshot = null;
  const listeners = new Set();
  const notify = () => listeners.forEach((fn) => fn());

  const get = () => {
    if (snapshot === null) snapshot = readList(key);
    return snapshot;
  };

  const set = (list) => {
    snapshot = list;
    writeList(key, list);
    notify();
  };

  const subscribe = (fn) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
  };

  // Sinkron antar tab: tab yang sudah terbuka memegang snapshot basi dan akan
  // menimpa isi keranjang tab lain saat di-toggle (data hilang). Pasang sekali.
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e) => {
      if (e.key !== key && e.key !== null) return;
      snapshot = null;
      notify();
    });
  }

  const toggle = (slug) => {
    const ids = get();
    set(ids.includes(slug) ? ids.filter((id) => id !== slug) : [...ids, slug]);
  };

  const remove = (slug) => set(get().filter((id) => id !== slug));

  return { get, subscribe, toggle, remove };
}

const cartStore = createStore(CART_KEY);
const wishlistStore = createStore(WISHLIST_KEY);

export function useCart() {
  const items = useSyncExternalStore(cartStore.subscribe, cartStore.get, cartStore.get);
  return { items, count: items.length, toggle: cartStore.toggle, remove: cartStore.remove };
}

export function useWishlist() {
  const items = useSyncExternalStore(wishlistStore.subscribe, wishlistStore.get, wishlistStore.get);
  return { items, has: (slug) => items.includes(slug), toggle: wishlistStore.toggle };
}
