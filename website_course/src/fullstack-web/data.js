const curriculum = [
  { title: 'Front End Development', output: 'Peserta mampu membuat website responsif dan interaktif dengan komponen modular yang mudah dikembangkan.' },
  { title: 'Back End Development', output: 'Peserta mampu mengembangkan sistem website yang terhubung dengan database, aman, dan siap di-deploy ke cloud.' },
  { title: 'User Experience (UX) Design', output: 'Peserta memahami prinsip-prinsip desain berbasis pengguna dan dapat merancang pengalaman digital yang intuitif dan efektif.' },
  { title: 'User Interface (UI) Design', output: 'Peserta mampu membuat tampilan antarmuka profesional menggunakan Figma dan AI tools, serta menyusun portofolio desain siap kerja.' },
  { title: 'Project Management', output: 'Peserta memahami bagaimana mengelola proyek digital secara kolaboratif dan efisien menggunakan metodologi Agile/SCRUM.' },
  { title: 'CCA: Communication, Collaboration, Adaptive', output: 'Peserta mampu berkomunikasi efektif, mempresentasikan ide dengan percaya diri, dan beradaptasi dengan dinamika kerja modern.' },
  { title: 'Career Coaching', output: 'Peserta siap menghadapi dunia kerja melalui portofolio profesional dan kemampuan mempresentasikan diri.' },
  { title: 'Product Research', output: 'Peserta mampu memahami kebutuhan pasar dan mengembangkan produk digital yang relevan dan berorientasi pengguna.' },
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
  { q: 'Apakah saya harus punya basic coding dulu sebelum ikut?', a: 'Tidak perlu. Program ini dirancang dari dasar, cocok untuk pemula tanpa background IT. Kamu akan dibimbing step by step oleh mentor industri.' },
  { q: 'Apa saja yang akan saya pelajari di program ini?', a: 'Kamu akan mempelajari Front End (HTML, CSS, JavaScript, React), Back End (Node.js, database), UI/UX Design (Figma), Project Management, hingga Career Coaching untuk persiapan masuk dunia kerja.' },
  { q: 'Apakah ada proyek nyata selama program berlangsung?', a: 'Ya! Seluruh program berbasis proyek nyata (real project). Di akhir program kamu akan memiliki portofolio profesional yang siap dipresentasikan ke recruiter.' },
  { q: 'Apakah program ini online atau offline?', a: 'Seluruh kegiatan pembelajaran dilaksanakan secara online (daring) melalui platform LMS Infinite Learning, lengkap dengan sesi mentoring live dan diskusi.' },
  { q: 'Bagaimana metode pembelajarannya?', a: 'Pembelajaran terdiri dari video materi, tugas praktik, proyek kelompok, sesi mentoring langsung dengan mentor industri, dan evaluasi akhir.' },
  { q: 'Apakah peserta akan mendapatkan sertifikat setelah lulus?', a: 'Ya, peserta yang menyelesaikan program akan mendapatkan Sertifikat Kelulusan resmi dari Infinite Learning Indonesia.' },
  { q: 'Apa hasil akhir setelah saya menyelesaikan program ini?', a: 'Kamu akan memiliki portofolio website full-stack siap pamer, sertifikat kelulusan, dan kesiapan karier melalui career coaching — ready to apply di perusahaan teknologi.' },
  { q: 'Apakah program ini cocok untuk career switcher?', a: 'Sangat cocok. Program ini dirancang untuk semua kalangan, termasuk career switcher yang ingin beralih ke bidang tech tanpa background sebelumnya.' },
];

export { curriculum, mentors, tiers, steps, faqs };
