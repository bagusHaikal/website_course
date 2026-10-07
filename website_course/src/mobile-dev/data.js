const curriculum = [
  { title: 'Dart Programming', output: 'Peserta mampu menulis kode Dart yang efisien, memahami konsep asynchronous, serta mengelola proyek menggunakan Git secara kolaboratif.' },
  { title: 'Basic Flutter', output: 'Peserta mampu membuat tampilan antarmuka interaktif dan memahami logika kerja aplikasi Flutter dari awal.' },
  { title: 'Flutter Intermediate', output: 'Peserta mampu membangun aplikasi fungsional dengan sistem login, database real-time, notifikasi, serta siap dirilis ke Google Play Store.' },
  { title: 'User Experience (UX) Design', output: 'Peserta memahami alur pengalaman pengguna dari riset hingga pengujian, serta mampu mengimplementasikan hasilnya ke dalam desain aplikasi.' },
  { title: 'Project Management', output: 'Peserta memahami cara mengelola proyek aplikasi secara efektif, kolaboratif, dan berorientasi hasil.' },
  { title: 'CCA: Communication, Collaboration, Adaptive', output: 'Peserta mampu berkomunikasi profesional, berpikir adaptif, dan bekerja efektif dalam tim lintas disiplin.' },
  { title: 'Career Coaching', output: 'Peserta siap menampilkan diri secara profesional dan percaya diri dalam proses rekrutmen.' },
  { title: 'Product Research', output: 'Peserta mampu mengidentifikasi peluang pasar dan merancang strategi produk yang relevan dengan kebutuhan pengguna.' },
];

const mentors = [
  { name: 'Hasan Harahap', role: 'UI/UX Design Mentor', image: 'https://course.infinitelearning.id/wp-content/uploads/2025/12/Hasan-169x300.png' },
  { name: 'Hafara Putri', role: 'UI/UX Design Mentor', image: 'https://course.infinitelearning.id/wp-content/uploads/2025/12/Peja-169x300.png' },
  { name: 'Luqyana', role: 'Professional Mentor', image: 'https://course.infinitelearning.id/wp-content/uploads/2025/12/Luqy-169x300.png' },
  { name: 'Arifian Saputra', role: 'Technical Mentor', image: 'https://course.infinitelearning.id/wp-content/uploads/2025/12/Arifian-169x300.png' },
  { name: 'Riyanda Azis', role: 'Technical Mentor', image: 'https://course.infinitelearning.id/wp-content/uploads/2025/12/Riyanda-169x300.png' },
  { name: 'Reza Kurniawan', role: 'Technical Mentor', image: 'https://course.infinitelearning.id/wp-content/uploads/2025/12/Reza-169x300.png' },
];

const tiers = [
  { label: 'Early Bird', date: '20 Oktober – 30 November 2025', original: 'Rp 6.500.000', price: 'Rp 999.000', active: true, soldOut: false, bestDeal: true },
  { label: 'Presale', date: '01 Desember – 31 Desember 2025', original: 'Rp 6.500.000', price: 'Rp 1.500.000', active: false, soldOut: true, bestDeal: false },
  { label: 'Regular', date: '01 Januari – 31 Januari 2026', original: 'Rp 6.500.000', price: 'Rp 2.500.000', active: false, soldOut: true, bestDeal: false },
];

const steps = [
  { num: '01', title: 'Lengkapi Data Diri', desc: 'Isi formulir pendaftaran dengan data yang valid.' },
  { num: '02', title: 'Verifikasi Data', desc: 'Pastikan data diri dan program yang dipilih sudah sesuai.' },
  { num: '03', title: 'Lakukan Pembayaran', desc: 'Bayar sesuai instruksi yang dikirimkan melalui Email.' },
  { num: '04', title: 'Cek Berkala', desc: 'Pantau Email atau Whatsapp untuk info onboarding.' },
];

const faqs = [
  { q: 'Apakah saya harus punya basic coding dulu sebelum ikut?', a: 'Tidak perlu. Program ini dirancang dari dasar, cocok untuk pemula tanpa background IT. Kamu akan dibimbing step by step oleh mentor industri dari Dart, Flutter, sampai UI/UX.' },
  { q: 'Apa saja yang akan saya pelajari di program ini?', a: 'Kamu akan mempelajari Dart Programming, Basic & Intermediate Flutter, UX Design, Project Management, CCA, Career Coaching, hingga Product Research untuk persiapan masuk dunia kerja.' },
  { q: 'Apakah ada proyek nyata selama program berlangsung?', a: 'Ya! Seluruh program berbasis proyek nyata (real project). Di akhir program kamu akan memiliki aplikasi mobile Android & iOS siap rilis ke Google Play Store yang bisa dipajang di portofolio.' },
  { q: 'Apakah program ini online atau offline?', a: 'Seluruh kegiatan pembelajaran dilaksanakan secara online (daring) melalui platform LMS Infinite Learning, lengkap dengan sesi mentoring live dan diskusi.' },
  { q: 'Bagaimana metode pembelajarannya?', a: 'Pembelajaran terdiri dari video materi, tugas praktik, proyek kelompok, sesi mentoring langsung dengan mentor industri, dan evaluasi akhir.' },
  { q: 'Apakah peserta akan mendapatkan sertifikat setelah lulus?', a: 'Ya, peserta yang menyelesaikan program akan mendapatkan Sertifikat Kelulusan resmi dari Infinite Learning Indonesia.' },
  { q: 'Apa hasil akhir setelah saya menyelesaikan program ini?', a: 'Kamu akan memiliki aplikasi mobile Flutter untuk Android & iOS dengan desain UI/UX yang matang, portofolio siap pamer, sertifikat kelulusan, dan kesiapan karier melalui career coaching.' },
  { q: 'Apakah program ini cocok untuk career switcher atau freelancer?', a: 'Sangat cocok. Program ini dirancang untuk semua kalangan, termasuk career switcher dan freelancer yang ingin beralih ke bidang mobile development tanpa background sebelumnya.' },
];

export { curriculum, mentors, tiers, steps, faqs };
