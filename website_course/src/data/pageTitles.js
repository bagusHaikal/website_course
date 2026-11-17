import { courses } from './courses';

const SITE_NAME = 'Infinite Learning Indonesia';

// Judul per route. SPA hanya punya satu `index.html`, jadi `<title>` di sana
// statis untuk ke-17 route; peta ini yang membedakannya saat runtime.
// Teks konten ada di sini, bukan di `routes.jsx` (konvensi repo).
const TITLES = {
  '/': 'Infinite Learning Indonesia — Bootcamp, Workshop & Belajar Mandiri',
  '/program-mandiri': 'Program Mandiri',
  '/bootcamp': 'Bootcamp Intensif',
  '/workshop': 'Workshop',
  '/belajar-mandiri': 'Belajar Mandiri',
  '/all-programs': 'Semua Program',
  '/keranjang': 'Keranjang',
  '/corporate-training': 'Corporate Training',
  '/partnership': 'Partnership',
  '/hire-our-graduates': 'Hire Our Graduates',
  '/login': 'Masuk',
  '/register': 'Daftar',
  '/full-stack-web': 'Full-Stack Web Development',
  '/mobile-dev': 'Mobile Development',
  '/ai-dev': 'Artificial Intelligence Development',
};

export function titleForPath(pathname) {
  if (pathname === '/') return TITLES['/'];
  if (TITLES[pathname]) return `${TITLES[pathname]} | ${SITE_NAME}`;

  // `/courses/:slug` judulnya ikut nama course, bukan peta statis.
  if (pathname.startsWith('/courses/')) {
    const slug = pathname.slice('/courses/'.length);
    const course = courses.find((c) => c.slug === slug);
    if (course) return `${course.title} | ${SITE_NAME}`;
  }

  return `Halaman Tidak Ditemukan | ${SITE_NAME}`;
}
