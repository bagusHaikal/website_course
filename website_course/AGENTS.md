# AGENTS.md

Konteks untuk AI agent yang bekerja di repo ini.

## Proyek

Website marketing **Infinite Learning Indonesia** — landing page multi-halaman
untuk bootcamp, workshop, belajar mandiri, corporate training, partnership,
hire graduates.

## Stack

- React 19.2.8 + Vite 8.2.2 (Rolldown) + Tailwind 4.3.3
- react-router-dom 7.18.4, lucide-react 1.59.0
- JavaScript murni — **tanpa TypeScript**

## Perintah

```bash
npm run dev      # dev server
npm run build    # build produksi
npm run lint     # ESLint — bersih per 30 Okt, jadikan gate sebelum push
npm run preview  # preview hasil build
```

## Struktur

Feature-based. 19 folder di `src/`, tiap halaman berpola:

```
src/<fitur>/index.jsx        ← komponen halaman
src/<fitur>/components/      ← section-section
src/<fitur>/data.js          ← konten/teks
```

- `src/shared/` — dipakai lintas halaman (Navbar, Footer, PageLayout,
  CourseCard, ProgramCta, NotFound, MentorsSection, StepsSection,
  PageLoading, PageMeta)
- `src/data/` — config lintas halaman (`siteLinks.js`, `courses.js`,
  `courseDetails.js`, `registration.js`, `pageTitles.js`, `searchIndex.js`,
  `cart.js` — store keranjang & wishlist lokal + `cart.test.mjs`)
- `src/contexts/` — **hanya `ThemeContext.jsx`**. `AuthContext.jsx` dihapus
  bersama halaman `/profile` (auth pindah ke dashboard tim lain).
- `src/cart/index.jsx` — halaman `/keranjang` (daftar, hapus, subtotal,
  checkout `disabled`). Bukan `src/profile/` yang sudah dihapus.
- `src/routes.jsx` — 17 route (termasuk `*` → NotFound dan `/keranjang`).
  **`Home` eager**, 15 halaman lain lazy (dideklarasikan di `src/pages.js`,
  dipisah karena `react-refresh/only-export-components`). `<Suspense>` ada di dalam
  `PageLayout` + 2 boundary terpisah untuk `/login` & `/register`.
- `src/assets/` — 43 file, **2,26 MB**. 33 WebP + 7 SVG + 3 PNG
  (`logo-black.png` 471×125, `logo-white.png` 979×261, dan
  `fullstack-web-hero.png` 400×400 yang belum dikonversi). Nama foto mentor:
  `mentor-<Nama>.webp`
- `public/` — 0,34 MB: `logo-IL.svg` (favicon, 512×512, monogram IL putih
  di kotak hitam radius 88/384, dirujuk `index.html?v=2`),
  `corporate-training.png`, `model-for-corporate-training.webp`,
  `partner.webp`, `robots.txt` (`logo-IL.png` & `favicon.svg` sudah dihapus —
  yang pertama wordmark 4,24:1 yang menyempit di tab, yang kedua logo Vite)

## Konvensi

- **Konten teks masuk `data.js`, bukan JSX.** Ubah copy di sana.
- **Warna/spacing pakai token dari `src/index.css`**, jangan hardcode hex.
- **Theme**: atribut `data-theme` di `<html>` + CSS variables. Anti-FOUC via
  inline script di `index.html` — jangan dihapus.
- Pola halaman program konsisten: Hero → Benefits → Curriculum → Mentors →
  Pricing → FAQ. Ikuti saat menambah halaman baru.
- **CTA pendaftaran dibaca dari `src/data/registration.js`, render lewat
  `shared/ProgramCta`.** Jangan tulis URL pendaftaran atau `href="#"` langsung
  di JSX. Untuk membuka pendaftaran program: ubah `status` jadi `'open'` dan
  isi `url` — satu baris, bukan berburu di 5 file.
- **Komponen section yang identik antar halaman program masuk `src/shared/`,
  data dikirim lewat props.** `MentorsSection` & `StepsSection` sudah begini
  (`<MentorsSection mentors={mentors} />`). Jangan menyalin ulang ke
  `src/<program>/components/` — dulu pola salin-tempel inilah yang melahirkan
  bug CTA AI Dev (§3.3), karena satu salinan diperbaiki, yang lain tertinggal.
- Bahasa UI: Indonesia.

## Gotchas

- `npm run lint` **bersih (0 error)** per 30 Okt. Jadikan gate sebelum push —
  kalau muncul error baru, itu regresi, bukan noise lama.
- **Auth di repo ini = form UI saja, tanpa backend.** `/profile` dan
  `contexts/AuthContext.jsx` tetap terhapus. `/login` & `/register` memuat form
  lengkap (validasi email/password, indikator kekuatan password, konfirmasi
  password) tetapi **tidak** memanggil API, tidak menyimpan session, dan tidak
  menyetel `localStorage`. Submit hanya menampilkan pesan "Autentikasi belum
  tersedia". Jangan menambahkan pemilih role Student/Instructor, `AuthContext`,
  atau `setTimeout` yang menandai user sudah login — semua itu sengaja dibuang.
- **Navbar tidak punya area akun.** Tidak ada dropdown, avatar, atau tombol
  Logout. Kalau `user`/`useAuth` muncul lagi di `Navbar.jsx`, itu regresi.
- `shared/AuthModal.jsx` **sudah dihapus** (Fase 3), begitu pula `AuthContext`
  dan seluruh halaman `/profile`. Jangan menghidupkan kembali salah satunya
  tanpa memutuskan dulu: auth ada di repo ini atau di dashboard tim lain.
- `react-hooks/set-state-in-effect` aktif dan galak di repo ini. Untuk reset
  state akibat perubahan prop/URL, pilih: remount (`key` / render kondisional)
  atau derived state — **bukan** `setState` di dalam effect, dan **bukan**
  `eslint-disable`.
- **`<a href="#">` dilarang** untuk CTA yang belum punya tujuan. Pakai
  `<button type="button" disabled aria-disabled="true">` (lewat `ProgramCta`
  status `'soon'`) atau `<span aria-disabled>` untuk ikon non-aksi. `<a href="#">`
  bisa diklik, melompat ke atas halaman, dan tetap fokusable — cacat UX + a11y.
  Berlaku juga di `/login` & `/register`: tombol "Masuk dengan Google" di sana
  `<button disabled>`, bukan `<a href="#">`. Termasuk `CourseCard`: kalau
  `course.slug` kosong, tombolnya `<button disabled>` label "Segera Hadir" —
  bukan `<Link to="#">`.
- **Keranjang & wishlist = `src/data/cart.js`, kunci `slug`, tanpa Context.**
  Dulu logika ini nempel di `shared/CourseCard.jsx` dengan `localStorage` key
  `il_wishlist` berisi **`id` numerik**. Dua bug: kunci beda tipe antar halaman
  (`bootcamp/data.js` memakai `id` = slug, `data/courses.js` memakai `1..4`),
  jadi hati di `/bootcamp` tidak menyala untuk kelas yang disimpan dari home;
  dan tidak ada notifikasi, jadi badge Navbar mustahil sinkron.
  Sekarang satu modul, dua store (`il_cart`, `il_wishlist`) berisi **array
  slug**, dibaca lewat `useSyncExternalStore` → Navbar & CourseCard ikut
  ter-render tanpa Provider. `storage` event menangani sinkron antar tab —
  **jangan dihapus**: tanpa itu tab lama menimpa isi keranjang tab baru dan
  item hilang. `try/catch` di baca & tulis wajib (mode privat melempar).
- **`price` numerik ditambahkan khusus untuk total keranjang** di
  `data/courses.js` **dan** `bootcamp/data.js` (8 baris). `priceOriginal` masih
  string terformat untuk tampilan; jangan menghitung dari situ. Kalau
  menambah kelas baru, isi `price` — tanpa itu total jadi `NaN`.
- **`/keranjang` = rute sendiri, keranjang kosong punya empty state.** Isi
  `il_cart` hanya slug; judul/harga/gambar dibaca ulang dari `data/courses.js`
  saat render. **Jangan simpan objek kursus ke `localStorage`** — `image`
  adalah `import` ber-hash yang berubah tiap build, entri akan usang dan
  gambarnya 404 setelah deploy.
- **Checkout masih `<button disabled>`** (`title="Pembayaran belum tersedia"`)
  karena belum ada backend/dashboard. Badge Navbar **bukan** tombol mati: ia
  `<Link to="/keranjang">` sungguhan, dan badge disembunyikan saat count 0.
  Beda dengan aturan CTA mati di tempat lain — di sini tujuannya sudah ada.
- **`bootcamp/data.js` menyalin array `courses` sendiri** (4 entri), terpisah
  dari `data/courses.js`. Entri di sana **wajib** punya `slug` yang persis sama
  dengan `slug` di `data/courses.js` (sekarang `professional-portfolio`,
  `data-driven`, `english-for-industrial`, `excel-made-easy`) dan `type`
  (`'Satuan'`). Tanpa `slug`, `CourseCard` merender `<button disabled>Segera
  Hadir</button>`; tanpa `type`, baris meta di kartu tampil ikon kosong.
  Halaman lain (`home`, `all-programs`, `belajar-mandiri`) memakai
  `data/courses.js` langsung sehingga tidak kena.
- **Judul `CourseCard` adalah `<Link>` ke `/courses/:slug`.** Itu satu-satunya
  jalan ke detail untuk kartu tanpa `showDetails` (home) — di sana tombol
  "Lihat Detail" sengaja tidak dirender karena home etalase, bukan katalog;
  CTA seksi `Lihat Semua Program` sudah menuju `/all-programs`. Jangan hapus
  tautan judul tanpa memberi jalan lain, dan jangan bungkus seluruh kartu dalam
  `<Link>`: isinya tombol wishlist (harus tetap fokusable sendiri).
  Kalau `slug` kosong, judul dirender teks biasa.
- **Tautan internal WAJIB `<Link to>`, bukan `<a href>`.** Router-nya
  `BrowserRouter` (`App.jsx`), jadi `<a href="/path">` memicu **full page
  reload**: seluruh bundle 271 KB diunduh & di-parse ulang, state React
  (ThemeContext, scroll) hilang, dan halaman berkedip. Ini tidak
  pernah terdeteksi lint maupun build — `<a href>` valid HTML dan halaman tetap
  terbuka, hanya lewat reload. Enam tempat sudah benar sejak awal (`Footer`,
  `Navbar` ×4); `home/HeroSection.jsx` ("Temukan Programmu") sempat salah dan
  sudah diperbaiki. Kalau menambah tautan internal, tiru pola
  `href.startsWith('/') ? <Link to> : <a href>`.
- **Tombol `<button>` tanpa `onClick` DAN tanpa `disabled` adalah bug**, bukan
  gaya. Tombol itu tampak aktif, fokusable, tapi diklik tidak terjadi apa-apa.
  Untuk CTA yang belum siap: `type="button" disabled aria-disabled="true"`
  + `title` + `cursor-not-allowed bg-bg-subtle border-border-default
  text-text-muted`. Dua titik di `corporate-training` (`HeroSection`,
  `ProgramsSection` — "Konsultasi Gratis") pernah lolos seperti ini.
- Tier `soldOut` di pricing **bukan** `<a>`, tapi `<button disabled>`. Jangan
  dikembalikan ke anchor.
- **Footer: ikon sosial adalah `<a>` aktif, telepon & email hanya teks.**
  Instagram/LinkedIn/TikTok/YouTube menuju laman resmi dengan
  `target="_blank" rel="noopener noreferrer"`. Sebaliknya nomor telepon dan
  email **sengaja** `<div>`, bukan `<a href="tel:">`/`mailto:` — permintaan
  pemilik produk. `contactLinks` di `data/siteLinks.js` masih ada sebagai data,
  tapi tidak lagi diimpor `Footer.jsx`. Jangan "memperbaiki" keduanya jadi link
  tanpa bertanya.
- **Tanggal tier di `data.js` semua sudah kedaluwarsa** (batch 2025/2026, hari
  ini Okt 2026). Ini masalah konten, belum diperbaiki — jangan "perbaiki" CTA
  tanpa memperbarui tanggal, atau user mendarat di promo yang sudah tutup.
- **`dark:` sudah dipetakan ke `data-theme`** lewat `@custom-variant dark` di
  `src/index.css` (baris 6). Jangan hapus baris itu — tanpa itu Tailwind v4
  kembali membaca `prefers-color-scheme` OS, sehingga dark mode mengikuti
  setting OS alih-alih tombol tema aplikasi.
- **Jangan pakai `animate-in` / `animate-fade-in`** (butuh plugin
  `tailwindcss-animate`, tidak terpasang — class-nya absen dari CSS build).
  Yang tersedia dan terbukti: `animate-fade-slide-up` dan `animate-pop-in`.
- `shared/SearchBar.jsx` **tidak boleh** `return null` saat navbar turun.
  Navbar hanya bergeser (`-translate-y-full`), jadi melepas SearchBar dari DOM
  membuat layout melompat. Pakai `opacity-0 pointer-events-none` + `inert`
  (sudah diterapkan) supaya ruangnya tetap terjaga dan tab-order benar.
- Route `*` → `shared/NotFound.jsx` sudah ada di `routes.jsx`. Jangan hapus —
  tanpanya URL salah merender layar kosong tanpa Navbar/Footer.
- **Code splitting (§5.1) sudah aktif — jangan kembalikan ke eager import.**
  `Home` eager; 14 halaman lain `lazy()` di `src/pages.js`. Tiga aturan yang
  mudah dilanggar:
  1. **`<Suspense>` harus di DALAM `PageLayout`**, bukan membungkus `<Routes>`
     di `App.jsx`. Kalau di atas, Navbar & Footer ikut hilang tiap navigasi →
     halaman berkedip. `/login` & `/register` tidak memakai `PageLayout`,
     jadi keduanya punya boundary sendiri di `routes.jsx`.
  2. **Jangan taruh `lazy()` di `routes.jsx`.** File itu mengekspor `routes`
     (bukan komponen); `react-refresh/only-export-components` akan error
     "Fast refresh only works when a file only exports components" untuk
     setiap komponen lazy yang dideklarasikan di sana. Itu sebabnya
     deklarasinya dipisah ke `src/pages.js` (semua ekspornya komponen).
  3. **Jangan lazy-kan `Home`.** Itu halaman pertama; memecahnya hanya
     menambah satu round-trip sebelum konten pertama tampil.
  Hasil: main chunk **595,61 KB → 262 KB**, 14 chunk route 5–30 KB.
- **Aturan `<img>` (§5.2): bukan "semua tag dapat semua atribut".**
  Atribut dipasang menurut **peran** gambar, bukan dipukul rata. 39 tag total;
  hasil akhir: **21** punya `width`+`height`, **19** punya `loading`/`decoding`,
  **8** sengaja kosong. Tiga aturan:
  1. **JANGAN beri `loading="lazy"` pada gambar hero.** Itu menunda LCP — kebalikan
     dari tujuannya. Ke-12 `HeroSection` harus tetap eager (default). Sudah
     diverifikasi: 0 dari 12 file `HeroSection.jsx` punya `loading=`.
  2. **JANGAN beri `width`/`height` pada gambar yang container-nya sudah
     memesan ruang** (`h-48`, `h-52`, `h-56`, `h-44`, `aspect-square`, `w-20 h-20`,
     `w-4 h-4`, `w-16 h-12`, `w-28 h-36`). CLS-nya sudah 0; atribut di sana
     hanya menambah diff tanpa efek. Yang wajib: gambar ber-class `h-auto`
     (tinggi ikut gambar → tinggi 0 sebelum load) dan logo `w-auto`
     (lebar 0 sebelum load → navbar bergeser).
  3. **`width`/`height` harus sama persis dengan dimensi file asli.** Kalau
     rasionya meleset, tinggi yang dipesan salah → justru menciptakan CLS baru.
     Dimensi aset yang sering dipakai: `slide_header_ungu` 764×583,
     `bootcamp` 587×343, `bootcamp-mentor-arifian` 193×344, `Skill-Builder`
     679×396, `hero-program-mandiri` 400×400, `BannerBelajarMandiri` 768×448,
     `image-program` 496×385, `partnership` 601×412,
     `model-for-corporate-training` 363×424, `corporate-training.png` 566×369,
     `logo-black` 471×125, `logo-white` 979×261.
  **Logo kondisional butuh dimensi kondisional.** `logo-black.png` (471×125) dan
  `logo-white.png` (979×261) beda ukuran, jadi pola
  `src={isLight ? LOGO_LIGHT : LOGO_DARK}` **wajib** diikuti
  `width={isLight ? 471 : 979} height={isLight ? 125 : 261}`. Angka statis akan
  salah di salah satu mode.
  **`user.avatar` sudah tidak ada** — avatarnya milik halaman `/profile` yang
  dihapus bersama `AuthContext`. Jangan bawa pola `updateProfile({ avatar })`
  kembali ke repo ini.
- **Jangan bikin class CSS bernama sama dengan utility Tailwind.** Dulu ada
  `.bg-bg-surface { box-shadow: ... }` di `index.css`; karena nama itu sudah
  dipakai Tailwind untuk `background-color`, rule kedua ikut ter-apply ke
  semua elemen `bg-bg-surface`. Efeknya dua: 47 elemen dapat shadow tanpa
  diminta, dan 30 elemen yang menulis `shadow-glow`/`shadow-glass` malah
  ketelan jadi `shadow-card` (urutan CSS: override di posisi 78.868 vs
  `.shadow-glow` di 53.735 → last-wins). Override sudah dihapus; kalau butuh
  shadow di kartu, tulis `shadow-card` eksplisit di JSX.
- **`PricingSection.jsx` masih 5 salinan berbeda** per halaman (fullstack-web,
  mobile-dev, ai-dev, program-mandiri, workshop) — **jangan** digabung tanpa
  config desain per program. Setelah perbaikan §3.3, kelima file itu tidak ada
  lagi yang identik (3.608 / 3.615 / 3.612 / 3.551 / 3.085 B). Menggabungkannya
  butuh keputusan produk, bukan sekadar refactor.
- `RequirementsSection.jsx` (3 salinan) **memang beda** — spesifikasi hardware
  tiap program tidak sama (i3 vs i5). Jangan "dimeratakan" saat refactor.
- **`prd.md` sengaja TIDAK diselaraskan dengan realisasi.** PRD mendeskripsikan
  LMS penuh (Node/Express, PostgreSQL, Redis, S3, pembelian kursus, progress
  tracking, sertifikat); realisasinya frontend statis. Ini **keputusan sadar**
  karena backend belum siap — bukan utang teknis yang terlupa. Jangan "rapikan"
  PRD dengan menghapus visi LMS tanpa persetujuan pemilik produk.
- `src/index.css` **tidak boleh punya BOM**. Dulu file ini UTF-8+BOM dengan
  14 komentar mojibake (`â”€â”€â”€`). Sudah dibersihkan ke ASCII murni. Kalau
  mengedit lewat tool yang menambahkan BOM, strip 3 byte pertamanya.
- **`useAuth` sudah tidak ada di repo ini.** `contexts/AuthContext.jsx` dihapus;
  kalau autocomplete atau import menawarkan `contexts/useAuth` /
  `contexts/AuthContext`, itu regresi dari kode lama — hanya
  `contexts/ThemeContext.jsx` yang tersisa. `/login` & `/register` sengaja tidak
  memakainya: form di sana murni UI, tidak butuh state auth.
- **Panel kiri `/login` & `/register` WAJIB punya `lg:sticky lg:top-0
  lg:h-screen`, dan grid-nya `lg:items-start`.** Gambar panel kiri memakai
  `absolute inset-0 w-full h-full object-cover`; `object-cover` menghitung
  ulang skala setiap kali ukuran kotaknya berubah. Dulu `/login` tidak punya
  `h-screen`, jadi tinggi panel kiri = tinggi baris grid = tinggi form kanan.
  Akibatnya: (a) saat pesan validasi muncul, form memanjang → panel kiri ikut
  memanjang → gambar "zoom in/out"; (b) pindah `/login` ↔ `/register` membuat
  crop gambar melompat karena kedua halaman memakai aturan tinggi berbeda;
  (c) panel yang memanjang memaksa `object-cover` memperbesar gambar → terlihat
  blur. Sekarang kedua halaman identik. Panel kanan memakai `lg:min-h-screen`
  supaya form tetap ter-center vertikal walau `items-start` mematikan stretch.
  Jangan hapus `lg:min-h-screen` itu — tanpa itu form menempel ke atas.
- **Beberapa class di JSX dulu "hantu"** (tidak ada di `@theme` sehingga tidak
  menghasilkan CSS apa pun): `bg-background`, `text-muted-foreground`,
  `bg-brand-yellow`. Semua sudah diganti ke token sah — `bg-bg-base`,
  `text-text-muted`, `bg-brand-accent`. Sebelum memakai class warna baru,
  pastikan namanya ada di blok `@theme` `src/index.css`. Nama token selalu
  berawalan peran: `bg-*`, `text-*`, `border-*` diikuti nama token
  (`bg-base`, `text-primary`, dst) — jadi utility-nya jadi `bg-bg-base`,
  `text-text-primary`, `border-border-default`. Itu memang dobel, bukan typo.
- **Nol hotlink gambar.** Logo memakai `assets/logo-black.png` +
  `assets/logo-white.png`; foto mentor memakai `assets/mentor-*.webp`; gambar
  slider memakai `program-mandiri.webp`, `workshops.webp`, `bootcamp.webp`,
  `BannerBelajarMandiri.webp`; hero `/fullstack-web` memakai
  `assets/fullstack-web-hero.png` (§5.3 tuntas, 400×400). Jangan kembalikan URL
  eksternal untuk aset; kalau domain mati, halaman kehilangan identitas visual.
- **`fullstack-web-hero.png` masih PNG** (211 KB, 400×400) — hasil unduh apa
  adanya dari `course.infinitelearning.id`, belum dikonversi ke WebP karena
  tidak ada `magick`/`cwebp`/`sharp` di mesin ini. Kalau dikonversi, cukup
  ganti nama file jadi `.webp` + satu baris `import` di
  `fullstack-web/components/HeroSection.jsx`.
- **`src/assets/model-for-corporate-training.webp` dan
  `public/model-for-corporate-training.webp` adalah dua file identik (hash
  sama) dan KEDUANYA dipakai**: `partnership/CTASection.jsx` meng-import yang
  di `src/assets`, `corporate-training/CTASection.jsx` memakai path absolut
  `/model-for-corporate-training.webp` dari `public`. Jangan hapus salah
  satunya tanpa menyatukan cara rujuknya lebih dulu.
- **Favicon = `public/logo-IL.svg` (512×512).** Dua pendahulunya gagal:
  `logo-IL.png` adalah **wordmark 4,24:1** di kanvas 512×512 (isi hanya 475×112,
  4,43% piksel) — di kotak tab persegi 16×16 tingginya jadi 3,8 px, tampak
  "menyempit"; dan `public/favicon.svg` ternyata **logo Vite default** (petir
  ungu `#863bff`), bukan mark IL. **Favicon wajib persegi** — wordmark tidak
  bisa, berapa pun resolusinya.
- **Radius sudut favicon SVG harus ≥20% sisi, kalau tidak terbaca kotak.**
  Sempat dipasang radius `52.5/384` = 13,7% dan hasilnya "tetap kotak" —
  bukan SVG-nya salah, tapi di 16 px radius itu cuma **2,19 px** dan diratakan
  antialiasing (ambang persepsi ~3 px). Sekarang `88/384` = 22,9% → 3,66 px.
  Kalau mengubah radius, ganti di **ketiga** `clipPath` (`d11f6e100b`,
  `57467ae911`, `ea60efe0a0`) — ketiganya menyalin path yang sama; satu saja
  yang berubah membuat bodi hitam dan glyph ter-clip beda bentuk.
- **Cache favicon agresif.** Chrome/Edge menyimpan favicon per origin kadang
  berhari-hari, jadi perubahan SVG tampak "tidak ngefek". `index.html` memakai
  `href="/logo-IL.svg?v=2"` — **naikkan angka versi setiap kali SVG favicon
  berubah**. Uji dengan tab baru, bukan reload; dan buka `/logo-IL.svg`
  langsung untuk memastikan SVG-nya benar sebelum menyalahkan cache.
- **Meta SEO hanya ada di `index.html` (§5.7).** SPA satu HTML, jadi ke-16 route
  berbagi satu `description`. `<title>` sudah dinamis per route lewat
  `shared/PageMeta.jsx`; `description` masih statis, dan crawler yang tidak
  menjalankan JS hanya melihat HTML kerangka.
- **`canonical`, `og:url`, `og:image`, dan `sitemap.xml` sengaja BELUM ada.**
  Semuanya butuh URL absolut dan **domain produksi belum ditetapkan**. Jangan
  isi dengan placeholder atau tebakan `infinitelearning.id` — canonical yang
  salah lebih merusak peringkat daripada tidak ada canonical. `robots.txt`
  sudah ada (allow all) tanpa baris `Sitemap:`. Kalau domain sudah final: isi
  keempatnya + daftarkan tiap route, lalu ganti `twitter:card` ke
  `summary_large_image` begitu ada gambar 1200×630.
- **Konsol PowerShell menampilkan UTF-8 sebagai mojibake.** `§` tampak hilang
  dan `—` tampak jadi `-` saat membaca file lewat `Get-Content`/output console,
  padahal byte-nya benar. Sebelum menyimpulkan file rusak, verifikasi di level
  byte (`E2 80 94` = `—`, `C2 A7` = `§`) — jangan percaya tampilan konsol.
- **Skip-link ada di `PageLayout`, dan `tabIndex={-1}` pada `<main>` itu wajib.**
  Tanpa `tabIndex={-1}`, sebagian browser hanya menggulir tanpa memindahkan
  fokus, lalu Tab berikutnya kembali ke Navbar — skip-link jadi tidak berguna.
  Tautannya harus tetap elemen fokusable **pertama**. `/login` & `/register`
  tidak memakai `PageLayout` (tanpa navbar), jadi wajar tidak punya skip-link.
- **Kartu mentor `MentorsSection.jsx:59` sengaja `<div onClick>` tanpa
  `role`/`tabIndex`.** Jangan "perbaiki" jadi fokusable: aksinya duplikat dari
  tiga tombol berlabel di bawahnya (prev / titik / next), sehingga perubahan itu
  justru menambah 5 tab stop sia-sia per halaman. Mengubahnya jadi `<button>`
  juga tidak sah — isinya `<h3>` + `<div>`, sedangkan `<button>` hanya boleh
  phrasing content.
- **Judul halaman diatur `shared/PageMeta.jsx` + `data/pageTitles.js`**, dirender
  sekali di `App.jsx` (di dalam `BrowserRouter`). Menambah route baru berarti
  menambah entri di `pageTitles.js`; kalau lupa, jatuh ke "Halaman Tidak
  Ditemukan". Hanya `<title>` yang dinamis — `description`/`og:*` tetap statis
  di `index.html`, jadi jangan berharap pratinjau sosial ikut berubah per
  halaman.
- **`SearchBar` membaca `data/searchIndex.js`, bukan `data/courses.js`.**
  Entri halaman program tidak punya `image`/`category`/`type`/`priceDiscount`,
  jadi kartu hasil merendernya kondisional. Kalau menambah field wajib baru
  pada entri, tambahkan juga di `programs` atau jaga tetap opsional.

## Status

> Bagian ini ditimpa tiap update, jangan di-append.

- Branch aktif: `Development-Bagus`
- Audit teknis: `../plan/analisis-website-course.md` (455 baris, belum di-commit)
- Sedang dikerjakan: menuntaskan temuan audit sebelum push ke repo
- **Terbaru (17 Nov): keranjang berjalan — `/keranjang` + badge Navbar + wishlist.**
  Modul baru `src/data/cart.js` (88 baris): dua store `il_cart`/`il_wishlist`
  berisi **array slug**, dibaca `useSyncExternalStore` (tanpa Context), sinkron
  antar tab lewat `storage` event. **Bug lama ikut beres:** kunci wishlist pindah
  `id` numerik → `slug`, jadi hati di `/bootcamp` menyala untuk kelas yang
  disimpan dari home (dulu `bootcamp/data.js` id=slug vs `data/courses.js`
  id=1..4). `CourseCard.jsx` 127 baris: `readWishlist`/`writeWishlist` lokal
  dibuang, tombol keranjang **hidup** (`aria-pressed`, ikon `fill-current` hijau
  brand saat masuk) — bukan lagi `<button disabled>`. `price` numerik ditambah di
  `data/courses.js` + `bootcamp/data.js` (8 baris). `Navbar.jsx` +`CartLink`
  (`<Link to="/keranjang">`, badge angka, sembunyi saat 0) di desktop & mobile.
  Halaman baru `src/cart/index.jsx` (166 baris): daftar + hapus + ringkasan
  (harga normal, potongan, total via `Intl.NumberFormat('id-ID')`), empty state,
  checkout `<button disabled>`. Route 16 → **17** (`/keranjang`), lazy 14 → 15,
  `pageTitles.js` + entri. Self-check `src/data/cart.test.mjs`: 6 assert
  (`node --test`) — JSON rusak, bukan array, mode privat melempar. Lint exit 0,
  build main **305,56 KB / 106,65 KB gzip** (+40 KB: chunk `react-router-dom`
  38,58 KB melebur ke main, bukan duplication — total JS hanya +4,2 KB), chunk
  `cart` 5,50 kB. 6 URL `vite preview` HTTP 200.
- **Terbaru (16 Nov): favicon `logo-IL.svg` — radius 13,7% → 22,9%.**
  Penyebab "sudut sudah melengkung tapi tampil kotak": radius `52.5/384` =
  13,7%, dan tab hanya merender **16×16 px**, jadi busurnya cuma **2,19 px**
  lalu diratakan antialiasing (ambang persepsi ~3 px). Diganti `88/384` =
  22,9% → **3,66 px**, di **tiga** `clipPath` (`d11f6e100b`, `57467ae911`,
  `ea60efe0a0`) karena ketiganya menyalin path yang sama. `index.html` juga
  dapat `href="/logo-IL.svg?v=2"` untuk menembus cache favicon Chrome/Edge
  yang agresif. File 1.844 → **1.712 B**. Lint exit 0, build
  264,84 KB / 92,77 KB gzip (tak berubah — SVG ada di `public/`, bukan bundle).
  Latar belakang: `logo-IL.png` (wordmark 4,24:1 di kanvas persegi) diganti
  karena di 16×16 tingginya cuma 3,8 px; `public/favicon.svg` ditolak sebab
  ternyata logo Vite default.
- **Terbaru (16 Nov, sesi sebelumnya): `CourseCard` — wishlist, ikon keranjang, tombol `/bootcamp`.**
  `shared/CourseCard.jsx` 66 → 139 baris. Wishlist: `localStorage` key
  `il_wishlist` (array `id`), `useState` lazy initializer, `try/catch` di baca &
  tulis (mode privat), toggle `aria-pressed` + `fill-current` merah. Keranjang:
  `<button disabled title="Keranjang belum tersedia">` — sengaja mati, karena
  harga masih string & belum ada backend/route checkout. Kedua ikon
  `h-10 w-10 rounded-full` di **baris bawah** kartu (bukan overlay gambar),
  `[Lihat Detail]` jadi `flex-1`, kartu tanpa `showDetails` (home) dapat
  `justify-end`; `<Link to="#">` saat `course.slug` kosong diganti
  `<button disabled>` "Segera Hadir". Berlaku di 5 pemakaian (home,
  all-programs, belajar-mandiri, bootcamp, related di `courses/:slug`).
  **Ikutan: 4 tombol "Lihat Detail" di `/bootcamp` hidup lagi** — `bootcamp/data.js`
  menyalin `courses` sendiri **tanpa `slug`/`type`**, jadi kartunya jatuh ke
  `disabled`; ditambah `slug` + `type: 'Satuan'` di 4 entri (8 baris), dan
  keempat `/courses/:slug` (200) langsung terpakai. **Judul kartu jadi tautan**:
  `<h3><Link to={/courses/${slug}}>{title}</Link></h3>` — satu-satunya jalan ke
  detail di home (yang sengaja tanpa tombol "Lihat Detail"), hover
  `text-brand-accent`; `slug` kosong → teks biasa. Main chunk 262,80 →
  **264,84 KB** / 92,77 KB gzip (+2,04 KB).
- **Terbaru (16 Nov, sesi sebelumnya): auth = form UI saja.**
  Langkah 1 — hapus seluruh auth: `src/profile/` (33.714 B + `ImageUploader.jsx`
  7.348 B), `shared/DemoNotice.jsx` (954 B), `contexts/AuthContext.jsx` (1.922 B);
  route `/profile` (`routes.jsx` 17→**16** route, `pages.js` 15→**14** lazy,
  `pageTitles.js`), `<AuthProvider>` di `App.jsx`, dan seluruh area akun Navbar
  (dropdown 10 tautan `/profile?tab=*`, avatar `data:` URL ×3, pemilih role ×2,
  Logout) — `Navbar.jsx` 454 → **223 baris**.
  Langkah 2 — **keputusan pemilik produk dibalik sebagian:** halaman
  `/login` & `/register` dipulihkan jadi **form UI lengkap** (validasi email,
  password ≥6, indikator kekuatan password, konfirmasi password, tombol Google
  `disabled`, tautan silang login↔register). Yang **tidak** dipulihkan:
  `AuthContext`, `AuthProvider`, `DemoNotice`, dan pemilih role
  Student/Instructor. Submit = `preventDefault` + validasi, lalu pesan
  "Autentikasi belum tersedia" — tidak ada API call, tidak ada session, tidak
  ada `localStorage`, tidak ada `navigate('/')`.
  **Dampak:** `login` 3.950 → **11.773 B**, `register` 4.070 → **15.045 B**
  (chunk 8,52 / 10,45 kB); 0 `useAuth` di `src`; `src/contexts/` tetap hanya
  `ThemeContext.jsx`; `<img>` tetap **39**; literal warna `src` 78 → **105**
  (hex 37→53, rgba 41→52 — inline style `Field` + logo Google di 2 file itu).
  Utang keamanan (password apa pun diterima, `il_user_session` plaintext) tetap
  tertutup karena auth-nya memang tidak ada. Lint exit 0, build 262,80 KB /
  92,16 KB gzip, 16 route `vite preview` HTTP 200.
- Sudah beres: §3.1 lint 5→0, §3.2 `dark:` variant, §3.3 CTA mati (13 `href="#"`
  dihapus), §3.6 route 404, §3.7 SearchBar `inert`, §3.7b `searchIndex.js`
  (11 course + 11 halaman program), §3.8 class animasi hantu.
- Sudah beres: Fase 2 — 3 file orphan, 7 aset mati (~75 KB), BOM + 14 komentar
  mojibake `index.css`, override `.bg-bg-surface` (§5.4).
- Sudah beres: §3.5 `AuthModal` + `corporate-training/Layout.jsx` dihapus;
  §4.3 tuntas (6 tombol mati → `disabled`, kini 0 `<button>` tanpa
  `onClick`/`disabled`).
- Sudah beres: §4.1 sebagian — `MentorsSection` + `StepsSection` → `src/shared/`,
  6 duplikat dihapus. Sisa: `PricingSection` (5 salinan beda) &
  `RequirementsSection` (3 salinan, memang beda spek) — butuh keputusan produk.
- Sudah beres: §5.1 code splitting, §5.2 `<img>` per peran (21 dimensi,
  19 lazy, 8 sengaja kosong), §5.3 hotlink 30 → **0**, §5.6 skip-link + judul per
  route (`PageMeta.jsx`), §5.7 SEO meta (tanpa domain), §5.8 README +
  `.env.example`.
- Berikutnya: §4.4 lanjutan (**105** literal warna tersisa: `AlumniSection` 21,
  `AlumniGridSection` 16, `TestimonialsSection` 16, `login`+`register` 18, `Navbar` 5,
  `MentorsSection` 1, `ThemeButton` 1, sisanya rgba di `CTASection`/`HeroSection`/`icons.jsx`),
  §4.1 `PricingSection`/`RequirementsSection`, dan QA browser.
- Belum dikerjakan: hover overlay case studies di `hire-graduates`
- Belum diverifikasi: tampilan tombol disabled di light mode (butuh cek browser)
- **Belum diverifikasi (dampak §5.4):** 47 elemen `bg-bg-surface` tanpa
  `shadow-*` kini kehilangan shadow-card. Cek browser — kalau ada yang terlalu
  datar, tambahkan `shadow-card` eksplisit di elemen itu.
- **Belum diverifikasi (§4.1):** carousel mentor di 3 halaman program.
- **Belum diverifikasi (§5.3):** foto mentor hasil import lokal di 3 halaman
  program + 4 gambar slider homepage — rasio `aspect-[4/3]` + `object-contain`
  (`bootcamp.webp` hanya 587×343, paling kecil) — dan `fullstack-web-hero.png`
  (400×400) di kartu `aspect-square` hero `/fullstack-web`.
- **Belum diverifikasi (auth):** Navbar tanpa area akun di desktop & mobile,
  dan tampilan form `/login`/`/register` baru di light + dark mode (border
  input memakai inline `rgba`, belum dicek di kedua tema).

## Riwayat Kerja

> Ringkasan per periode. Gabungkan ke baris periode yang ada — jangan tambah baris baru tiap sesi.

| Periode | Fokus | Patch |
|---|---|---|
| 16–18 Sep | Eksplorasi repo, konsolidasi PRD & design rules | 35 |
| 21–24 Sep | Integrasi AuthModal + AuthContext, perbaikan light theme, debug import & UI | 60 |
| 25 Sep | Routing bootcamp ke navbar dropdown, review status kode | 49 |
| 28 Sep | Halaman workshop, link navbar Belajar Mandiri | 30 |
| 29 Sep | Resolusi konflik merge App.jsx & Footer.jsx, perbaiki hero program mandiri | 95 |
| 5–6 Okt | Card portofolio profesional, referensi Mobile Dev Flutter | 21 |
| 7 Okt | Perbaikan link footer mobile development | 18 |
| 9 Okt | Sesi diskusi, tanpa perubahan file | 0 |
| 30 Okt | §3.1 lint tuntas (5→0 error) + §3.3 CTA mati: `data/registration.js` + `shared/ProgramCta.jsx` baru, 13 titik `href="#"` dibersihkan | 19 |
| 9 Nov | Audit ulang 16 temuan vs kondisi aktual. **Fase 1 Hotfix tuntas**: §3.2 `@custom-variant dark`, §3.6 route 404 (`shared/NotFound.jsx`), §3.7 SearchBar `inert`, §3.8 `animate-in`/`animate-fade-in` → animasi yang ada. **Fase 2 Bersih-bersih tuntas**: 3 file orphan, 7 aset mati (~75 KB), BOM + 14 komentar mojibake `index.css`, override `.bg-bg-surface` (§5.4) yang menelan `shadow-glow` di 30 elemen. **Fase 3 sebagian**: §3.5 `AuthModal` + `corporate-training/Layout.jsx` dihapus, §4.2 `shared/DemoNotice.jsx` (label demo), §4.5 PRD sengaja tidak disentuh. **§4.1 sebagian**: `MentorsSection` & `StepsSection` → `src/shared/`, 6 file duplikat dihapus. Verifikasi konversi aset & pemetaan hotlink §5.3. | 32 |
| 10 Nov | Verifikasi konversi WebP (aset 4,72 → 2,04 MB, −57%) + perbaikan `logo-black.webp` → `logo-black.png` & `LOGO_LIGHT`/`LOGO_DARK` tertukar di `Navbar`. **§5.3 hotlink 30 → 1**: 7 logo `lms-v2` → `logo-black.webp`/`logo-white.png`, 18 kemunculan (6 file) foto mentor `course.infinitelearning.id` → `assets/mentor-*.webp` di 3 `data.js`, 4 slider `imagedelivery.net` → aset lokal. **Zoom login ↔ register**: `/login` disamakan dengan `/register` (`lg:items-start` + `lg:sticky lg:top-0 lg:h-screen`, panel kanan `lg:min-h-screen`). **4 class hantu** `bg-background`/`text-muted-foreground`/2× `bg-brand-yellow` → token sah + komentar mojibake "Left image panel". **§3.3 lanjutan**: 2 tombol "Konsultasi Gratis" mati di `corporate-training` → `disabled`; footer ikon sosial jadi `<a>` aktif (IG/LinkedIn/TikTok/YouTube), telepon & email jadi teks biasa; `<a href="/all-programs">` di `home/HeroSection` → `<Link to>`. **§5.1 code splitting tuntas**: `src/pages.js` (15 `lazy()`), `shared/PageLoading.jsx`, `<Suspense>` di dalam `PageLayout` + boundary `/login`/`/register`; main chunk 595,61 → 262 KB (−56%), 17 route diuji HTTP 200. **§5.2 tuntas**: 44 `<img>` diaudit per peran — 21 `width`+`height` (dimensi cocok file asli), 19 `loading`+`decoding`, 10 sengaja kosong (12 hero eager, `user.avatar` data URL, 1 hotlink §5.3); logo kondisional dimensi kondisional (471×125 vs 979×261). | 51 |
| 16 Nov | **§5.8 tuntas.** `README.md` template Vite → dokumentasi nyata (stack & versi, prasyarat Node `^20.19.0 \|\| >=22.12.0` dari `node_modules/vite/package.json`, 4 perintah, struktur, 6 konvensi wajib, peringatan auth mock, syarat SPA fallback saat deploy, tabel dokumen). `.env.example` minimal — hanya komentar, sebab nol env var dibaca kode; satu placeholder `VITE_API_BASE_URL` dikomentari untuk backend. `.gitignore` dapat `.env` + `.env.*` + `!.env.example` (sebelumnya hanya `*.local` → `.env` polos ikut ter-commit); terverifikasi `.env` ter-ignore, `.env.example` tidak. Lint exit 0, build sukses (268,57 KB / 92,66 KB gzip). **§5.7 SEO meta (tanpa domain)**: `index.html` dapat `<title>` deskriptif, `description` 144 char, `robots`, OG (`type`/`site_name`/`locale`/`title`/`description`), Twitter `summary` (bukan `summary_large_image`, sebab tak ada `og:image`); `public/robots.txt` baru allow-all tanpa `Sitemap:`. `canonical`/`og:url`/`og:image`/`sitemap.xml` **sengaja kosong** — butuh URL absolut, domain belum final (`TODO §5.7`); judul per route juga belum (17 route berbagi satu `<title>`). Anti-FOUC & preconnect utuh, byte `—`/`§` diverifikasi, 18 URL HTTP 200. **§5.6 skip-link**: `PageLayout` dapat tautan "Lewati ke konten" + `<main id="main-content" tabIndex={-1}>`. **Kartu mentor sengaja tidak diubah** (opsi A — aksinya duplikat dari 3 tombol berlabel). **Judul per route**: `data/pageTitles.js` + `shared/PageMeta.jsx` di `App.jsx`, `/courses/:slug` dari `courses.js`. **§4.3 tuntas**: 6 tombol mati → `disabled` (Read More ×2, Konsultasi, Google ×2, Course Builder) — kini 0 `<button>` tanpa `onClick`/`disabled`. **§4.4 cicilan**: `login`+`register` 26 literal → token (10 hex + 16 rgba; cuma yang terbukti 1:1), 3 ternary mati dihapus; total `src` 153 → 127. Brand Google `#4285F4` dkk sengaja tidak disentuh. **§3.7b SearchBar lintas-program**: `data/searchIndex.js` (11 course + 11 halaman program ber-`keywords`), kartu hasil render kondisional; bundle 268,57 → 271,48 KB (+2,9 KB). **`public/favicon.svg` dihapus** (tak dirujuk, masih di git). **Auth dihapus total**: `src/profile/` (33.714+7.348 B), `shared/DemoNotice.jsx`, `contexts/AuthContext.jsx` dihapus; route `/profile` + `AuthProvider` + seluruh area akun Navbar (dropdown 10 tautan, 3 avatar data-URL, 2 pemilih role, Logout) dibuang — `Navbar.jsx` 454 → 223 baris; `/login` & `/register` jadi panel kiri + 1 tombol penunjuk (`href="#"` + `preventDefault` + `aria-disabled`, pengecualian resmi di Gotchas); `login` 14.005 → 3.950 B, `register` 15.837 → 4.070 B. Route 17 → 16, lazy 15 → 14, `<img>` 44 → 39, literal warna 127 → 78 (hex 75 → 37, rgba 52 → 41). Utang keamanan (password apa pun, role bebas, `il_user_session` plaintext) selesai dengan penghapusan. Chunk `profile-*.js` 31,11 kB hilang; main 262,78 KB / 92,16 KB gzip. Lint exit 0, 16 route HTTP 200. `README.md` + `AGENTS.md` disinkronkan. **Koreksi pemilik produk**: `/login` & `/register` dipulihkan jadi form UI lengkap (validasi, password strength, konfirmasi, Google `disabled`, tautan silang) **tanpa** `AuthContext`/`AuthProvider`/`DemoNotice`/pemilih role — submit hanya `preventDefault` + validasi lalu pesan "Autentikasi belum tersedia", nol API call & nol `localStorage`. Chunk `login` 8,52 kB + `register` 10,45 kB, main tetap 262,80 KB / 92,17 KB gzip; `<img>` tetap 39; literal warna 78 → 105 (inline style `Field` + logo Google). **§5.3 tuntas**: hotlink gambar terakhir `fullstack-web/HeroSection.jsx:60` (`course.infinitelearning.id/.../web-1.png`) diunduh apa adanya → `src/assets/fullstack-web-hero.png` (211.193 B, 400×400, `status=200`), `import` + `aspect-square` tetap tanpa `width`/`height` (kontainer sudah memesan ruang, §5.2), komentar `TODO §5.3` dihapus; aset 42 → 43 file / 2,04 → 2,26 MB; chunk `fullstack-web-hero-*.png` 211,19 kB hanya dimuat di route itu. Konversi ke WebP belum (tak ada `magick`/`cwebp`/`sharp`). Nol hotlink gambar di `src`. **`CourseCard` wishlist + keranjang**: `shared/CourseCard.jsx` 66 → 139 baris (satu-satunya file berubah) — wishlist `localStorage` key `il_wishlist` (array `id`, lazy `useState`, `try/catch` baca/tulis, `aria-pressed` + `fill-current`), keranjang `<button disabled title="Keranjang belum tersedia">` (harga masih string, belum ada backend/route checkout), dua ikon `h-10 w-10 rounded-full` di baris bawah, `[Lihat Detail]` jadi `flex-1`, kartu home `justify-end`; `<Link to="#">` fallback `slug` kosong → `<button disabled>` "Segera Hadir". Berlaku 5 pemakaian. Main 262,80 → 264,72 KB / 92,74 KB gzip. **Tombol `/bootcamp` hidup**: `bootcamp/data.js` menyalin `courses` tanpa `slug`/`type` → `CourseCard` jatuh ke `disabled` (sebelumnya `<Link to="#">`); tambah `slug` + `type: 'Satuan'` di 4 entri (8 baris), `id` = `slug` di `data/courses.js`, ke-4 `/courses/:slug` terpakai dan 200. **Judul `CourseCard` jadi `<Link>`** ke `/courses/:slug` (hover `text-brand-accent`, `slug` kosong → teks biasa) — jalan ke detail untuk kartu home yang sengaja tanpa tombol "Lihat Detail". Main 264,72 → 264,84 KB / 92,77 KB gzip. **Favicon `logo-IL.svg`**: radius sudut `52.5/384` (13,7%) → `88/384` (22,9%) di ketiga `clipPath`, sebab di tab 16×16 radius lama cuma 2,19 px dan terbaca kotak; `index.html` dapat `?v=2` sebagai cache-bust (favicon Chrome/Edge di-cache berhari-hari). File 1.844 → 1.712 B. Didahului dua kegagalan aset: `logo-IL.png` wordmark 4,24:1 di kanvas 512×512 (isi 475×112, 4,43% piksel → tinggi 3,8 px di tab) dan `public/favicon.svg` yang ternyata logo Vite default. **Keranjang berjalan (17 Nov)**: `src/data/cart.js` baru (2 store `il_cart`/`il_wishlist`, array **slug**, `useSyncExternalStore`, `storage` event untuk sinkron antar tab), `CourseCard` tombol keranjang hidup + wishlist pindah `id`→`slug` (bug hati `/bootcamp` beres), `price` numerik di `data/courses.js` + `bootcamp/data.js` (8 baris), `Navbar` `CartLink` + badge, halaman `src/cart/index.jsx` (daftar/hapus/ringkasan/empty state, checkout `disabled`), route 16→17, lazy 14→15, `pageTitles.js` +1, `src/data/cart.test.mjs` 6 assert lulus. Lint exit 0; main 264,84 → 305,56 KB / 106,65 KB gzip (+40 KB, tapi chunk `react-router-dom` 38,58 KB melebur ke main — total JS cuma +4,2 KB), chunk `cart` 5,50 kB; 6 URL HTTP 200. | 34 |
