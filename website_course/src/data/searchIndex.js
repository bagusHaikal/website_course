import { courses } from './courses';

// Indeks tunggal untuk navbar SearchBar. Sebelumnya SearchBar hanya membaca
// `courses` (11 item), sehingga "bootcamp", "partnership", "ai" tidak
// ditemukan walau halamannya ada.
//
// Bentuk objek sengaja dibuat sama dengan `courses` (title/category/type/
// priceDiscount) supaya `SearchBar` cukup menambah `href`. Entri halaman
// program tidak punya gambar/harga — kartu hasil menanganinya secara kondisional.
const programs = [
  { id: 'p-mandiri', title: 'Program Mandiri', category: 'Program', keywords: 'mandiri fleksibel sendiri online belajar kapan saja', href: '/program-mandiri' },
  { id: 'p-bootcamp', title: 'Bootcamp', category: 'Program', keywords: 'bootcamp intensif kelas karir cepat kerja', href: '/bootcamp' },
  { id: 'p-workshop', title: 'Workshop', category: 'Program', keywords: 'workshop pelatihan singkat event data science', href: '/workshop' },
  { id: 'p-belajar', title: 'Belajar Mandiri', category: 'Program', keywords: 'belajar mandiri gratis materi modul', href: '/belajar-mandiri' },
  { id: 'p-all', title: 'Semua Program', category: 'Program', keywords: 'semua program daftar katalog', href: '/all-programs' },
  { id: 'p-web', title: 'Full-Stack Web Development', category: 'Program', keywords: 'web developer frontend backend react javascript fullstack', href: '/full-stack-web' },
  { id: 'p-mobile', title: 'Mobile Development', category: 'Program', keywords: 'mobile flutter android ios aplikasi developer', href: '/mobile-dev' },
  { id: 'p-ai', title: 'Artificial Intelligence Development', category: 'Program', keywords: 'ai kecerdasan buatan machine learning data', href: '/ai-dev' },
  { id: 'p-corp', title: 'Corporate Training', category: 'Perusahaan', keywords: 'corporate training perusahaan karyawan b2b inhouse', href: '/corporate-training' },
  { id: 'p-partner', title: 'Partnership', category: 'Perusahaan', keywords: 'partnership kemitraan kolaborasi perusahaan', href: '/partnership' },
  { id: 'p-hire', title: 'Hire Our Graduates', category: 'Perusahaan', keywords: 'hire rekrut lulusan alumni talent hiring', href: '/hire-our-graduates' },
];

export const searchIndex = [
  ...courses.map((c) => ({ ...c, href: `/courses/${c.slug}` })),
  ...programs,
];
