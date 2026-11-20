# Infinite Learning Indonesia — Website Course

Website marketing multi-halaman untuk program **bootcamp**, **workshop**,
**belajar mandiri**, **corporate training**, **partnership**, dan
**hire graduates** Infinite Learning Indonesia.

Seluruh konten bersifat statis — tidak ada backend. Autentikasi **tidak ada di
repo ini** (lihat [Autentikasi](#autentikasi)).

## Stack

| Bagian | Versi |
|---|---|
| React | 19.2.8 |
| Vite | 8.2.2 (Rolldown) |
| Tailwind CSS | 4.3.3 |
| react-router-dom | 7.18.4 |
| lucide-react | 1.59.0 |

JavaScript murni, tanpa TypeScript.

## Prasyarat

- Node.js `20.19+` atau `22.12+` (syarat Vite 8)
- npm

## Perintah

```bash
npm install
npm run dev      # dev server
npm run lint     # ESLint — harus 0 error sebelum push
npm run build    # build produksi ke dist/
npm run preview  # jalankan hasil build secara lokal
```

`lint` bersih (0 error). Kalau muncul error baru, itu regresi — bukan noise lama.

## Struktur

Feature-based. Setiap halaman berpola:

```
src/<fitur>/index.jsx      komponen halaman
src/<fitur>/components/    section-section
src/<fitur>/data.js        konten & teks
```

| Folder | Isi |
|---|---|
| `src/shared/` | Komponen lintas halaman (Navbar, Footer, PageLayout, CourseCard, ProgramCta, MentorsSection, StepsSection, NotFound, PageLoading) |
| `src/data/` | Config lintas halaman (`siteLinks.js`, `courses.js`, `courseDetails.js`, `registration.js`) |
| `src/contexts/` | `ThemeContext.jsx` saja |
| `src/routes.jsx` | 16 route. `Home` eager, 14 halaman lain `lazy()` di `src/pages.js` |
| `src/assets/` | Gambar & logo (WebP/SVG) |
| `public/` | Aset yang dirujuk lewat path absolut |

## Konvensi penting

- **Konten teks masuk `data.js`, bukan JSX.**
- **Warna & spacing pakai token dari `src/index.css`** — jangan hardcode hex.
- **CTA pendaftaran dibaca dari `src/data/registration.js`** dan dirender lewat
  `shared/ProgramCta`. Jangan tulis URL pendaftaran atau `href="#"` di JSX.
  Untuk membuka program: ubah `status` jadi `'open'` dan isi `url`.
- **Tautan internal wajib `<Link to>`, bukan `<a href>`** — router-nya
  `BrowserRouter`, jadi `<a href>` memicu full page reload.
- **CTA yang belum punya tujuan** → `<button type="button" disabled>` dengan
  label "Segera Hadir", bukan `<a href="#">`.
- **Jangan `loading="lazy"` pada gambar hero** — itu menunda LCP.
- **Keranjang & wishlist disimpan di `localStorage`** (`il_cart`, `il_wishlist`)
  lewat `src/data/cart.js` — berisi array **slug**, dibaca `useSyncExternalStore`.
  Halaman `/keranjang` sudah ada (daftar, hapus, total); tombol checkout sengaja
  `disabled` sampai backend & dashboard siap.

Detail lengkap beserta alasannya ada di `AGENTS.md`. Baca itu sebelum mengubah
kode.

## Autentikasi

**Belum ada backend.** `/login` dan `/register` sudah memuat form UI lengkap —
validasi email, password minimal 6 karakter, indikator kekuatan password, dan
konfirmasi password — tetapi **tidak** memverifikasi kredensial, tidak memanggil
API, dan tidak menyimpan session (`localStorage` kosong). Submit hanya
menjalankan validasi lalu menampilkan pesan "Autentikasi belum tersedia".

`contexts/AuthContext.jsx`, `shared/DemoNotice.jsx`, halaman `/profile`, dan
pemilih role Student/Instructor sudah dihapus dan **jangan** dihidupkan kembali
tanpa keputusan produk. Titik sambung backend ada di `TODO(backend)` dalam
`handleSubmit` kedua halaman.

## Konfigurasi

Tidak ada environment variable yang dibutuhkan saat ini — semua data statis.
Lihat `.env.example` untuk placeholder yang akan dipakai saat backend tersedia.

## Deploy

Output `npm run build` adalah SPA statis di `dist/`. Hosting **wajib** punya
fallback rewrite ke `index.html` untuk semua path, karena route ditangani
`BrowserRouter` di sisi klien. Tanpa itu, membuka `/bootcamp` langsung akan 404.

## Dokumen

| File | Isi |
|---|---|
| `AGENTS.md` | Konvensi, gotcha, status pekerjaan, riwayat — **baca ini dulu** |
| `prd.md` | Visi produk (LMS penuh). Belum selaras dengan realisasi — sadar, bukan lupa |
| `design.md` | Aturan desain |
| `../plan/analisis-website-course.md` | Audit teknis & rencana perbaikan |
