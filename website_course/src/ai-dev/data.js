const curriculum = [
  { title: 'Python Programming', output: 'Peserta mampu menulis dan mengelola kode Python yang efisien, terstruktur, serta siap digunakan untuk proyek AI dan data analysis.' },
  { title: 'Introduction to AI', output: 'Peserta memahami lanskap AI modern, penerapan lintas industri, dan dasar berpikir kritis dalam membangun solusi AI yang etis dan bermanfaat.' },
  { title: 'Data Science', output: 'Peserta mampu menyiapkan dan mengekstrak insight dari data dengan metode analisis ilmiah dan visualisasi yang informatif.' },
  { title: 'Machine Learning', output: 'Peserta dapat membangun dan mengevaluasi model pembelajaran mesin yang mampu memprediksi dan mengklasifikasi data secara mandiri.' },
  { title: 'Deep Learning', output: 'Peserta memahami cara kerja model deep learning dan mampu menerapkannya untuk tugas kompleks seperti image recognition dan NLP.' },
  { title: 'Model Deployment', output: 'Peserta mampu meng-deploy model AI secara online agar bisa diakses pengguna melalui web atau API.' },
  { title: 'AI Applications', output: 'Peserta mampu memahami beragam bidang aplikasi AI dan mengembangkan prototype berbasis kebutuhan industri.' },
  { title: 'AI Development Tools & Frameworks', output: 'Peserta siap bekerja dengan ekosistem pengembangan AI modern yang terintegrasi.' },
  { title: 'CCA: Communication, Collaboration, Adaptive', output: 'Peserta mampu berkomunikasi profesional, berpikir adaptif, dan bekerja efektif dalam tim lintas disiplin.' },
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
  { label: 'Early Bird', date: '20 Oktober – 30 November 2025', original: 'Rp 6.500.000', price: 'Rp 999.000', active: false, soldOut: true, bestDeal: false },
  { label: 'Presale', date: '01 Desember – 31 Desember 2025', original: 'Rp 6.500.000', price: 'Rp 1.500.000', active: false, soldOut: true, bestDeal: false },
  { label: 'Regular', date: '01 Januari – 31 Januari 2026', original: 'Rp 6.500.000', price: 'Rp 2.500.000', active: true, soldOut: false, bestDeal: false },
];

const steps = [
  { num: '01', title: 'Lengkapi Data Diri', desc: 'Isi formulir pendaftaran dengan data yang valid.' },
  { num: '02', title: 'Verifikasi Data', desc: 'Pastikan data diri dan program yang dipilih sudah sesuai.' },
  { num: '03', title: 'Lakukan Pembayaran', desc: 'Bayar sesuai instruksi yang dikirimkan melalui Email.' },
  { num: '04', title: 'Cek Berkala', desc: 'Pantau Email atau Whatsapp untuk info onboarding.' },
];

const faqs = [
  { q: 'Apa itu Program Artificial Intelligence di Infinite Learning?', a: 'Program ini membimbing kamu dari nol hingga mampu membangun proyek AI nyata, mencakup machine learning, deep learning, NLP, dan model deployment. Didisain untuk pemula maupun yang sudah punya dasar coding.' },
  { q: 'Apakah saya harus punya basic coding dulu sebelum ikut?', a: 'Tidak perlu. Program ini dirancang dari dasar, cocok untuk pemula tanpa background IT. Kamu akan dibimbing step by step oleh mentor industri dari Python, Machine Learning, hingga Deep Learning.' },
  { q: 'Apa saja yang akan saya pelajari di program ini?', a: 'Kamu akan mempelajari Python Programming, Introduction to AI, Data Science, Machine Learning, Deep Learning, Model Deployment, AI Applications, AI Development Tools & Frameworks, dan CCA untuk persiapan masuk dunia kerja.' },
  { q: 'Apakah ada proyek nyata selama program berlangsung?', a: 'Ya! Program ini berbasis proyek nyata (real project). Di akhir program kamu akan memiliki model AI siap deploy yang bisa dipajang di portofolio.' },
  { q: 'Apa hasil akhir setelah saya menyelesaikan program ini?', a: 'Kamu akan memiliki proyek AI (machine learning/deep learning/NLP) siap deploy, portofolio siap pamer, sertifikat kelulusan, dan kesiapan karier sebagai AI Engineer atau Data Analyst.' },
  { q: 'Apakah program ini cocok untuk career switcher atau freelancer?', a: 'Sangat cocok. Program ini dirancang untuk semua kalangan, termasuk career switcher dan freelancer yang ingin beralih ke bidang AI tanpa background sebelumnya.' },
  { q: 'Apakah peserta akan mendapatkan sertifikat setelah lulus?', a: 'Ya, peserta yang menyelesaikan program akan mendapatkan Sertifikat Kelulusan resmi dari Infinite Learning Indonesia.' },
  { q: 'Bagaimana metode pembelajarannya?', a: 'Pembelajaran terdiri dari video materi, tugas praktik, proyek kelompok, sesi mentoring langsung dengan mentor industri, dan evaluasi akhir.' },
  { q: 'Apakah program ini dilaksanakan online atau offline?', a: 'Seluruh kegiatan pembelajaran dilaksanakan secara online (daring) melalui platform LMS Infinite Learning, lengkap dengan sesi mentoring live dan diskusi.' },
];

export { curriculum, mentors, tiers, steps, faqs };
