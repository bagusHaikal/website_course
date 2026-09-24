const faqs = [
  { q: "Apakah pembayaran bisa dicicil?", a: "Tidak bisa. Seluruh biaya program <strong>dibayarkan secara penuh (lumpsum)</strong> sesuai nominal yang tertera pada informasi pendaftaran. Pembayaran dilakukan satu kali sebelum program dimulai." },
  { q: "Apakah ada tahapan seleksi?", a: "Tidak ada tahapan seleksi. Seluruh pendaftar yang telah <strong>melengkapi administrasi dan melakukan pembayaran</strong> akan otomatis terdaftar sebagai peserta resmi Program Mandiri di Infinite Learning." },
  { q: "Apa saja kewajiban selama mengikuti program?", a: "Peserta wajib:<ol class='list-decimal pl-5 mt-2 space-y-1'><li>Mengikuti seluruh sesi pembelajaran dan mentoring.</li><li>Menyelesaikan proyek individu dan tim.</li><li>Menjaga etika profesional selama program berlangsung.</li><li>Menghadiri minimal 80% kegiatan program.</li><li>Menyelesaikan laporan akhir dan evaluasi program.</li></ol>" },
  { q: "Apa saja syarat dan ketentuan program ini?", a: "Beberapa syarat umum meliputi:<ol class='list-decimal pl-5 mt-2 space-y-1'><li>Mahasiswa aktif dari perguruan tinggi di Indonesia.</li><li>Bersedia mengikuti program penuh selama 1 semester (Februari–Juni 2026).</li><li>Memiliki komitmen tinggi dan kesiapan mengikuti kegiatan online.</li><li>Menyelesaikan administrasi pendaftaran dan pembayaran tepat waktu.</li></ol>" },
  { q: "Bagaimana jika jadwal program bertabrakan dengan kuliah reguler?", a: "Jika terjadi benturan, peserta dapat berkonsultasi dengan <strong>Project Manager atau mentor program</strong> untuk menyesuaikan waktu pengerjaan proyek atau sesi tertentu." },
  { q: "Kampus apa saja yang sudah bekerja sama dengan Infinite Learning?", a: "Infinite Learning telah bekerja sama dengan <strong>ratusan perguruan tinggi di seluruh Indonesia</strong>, termasuk universitas negeri dan swasta ternama. Daftar kampus mitra akan terus diperbarui." },
  { q: "Apakah bisa di-refund jika sudah terlanjur mendaftar?", a: "<strong>Tidak bisa.</strong> Biaya yang sudah dibayarkan <strong>tidak dapat dikembalikan (non-refundable)</strong> dengan alasan apa pun, kecuali jika pembatalan program dilakukan oleh pihak Infinite Learning. Oleh karena itu, peserta diharapkan memastikan komitmen dan kesiapan sebelum melakukan pendaftaran." },
  { q: "Apa itu Program Mandiri Infinite Learning?", a: "Program Mandiri Infinite Learning adalah program <strong>Magang dan Studi Independen (MSI)</strong> yang diselenggarakan secara <strong>mandiri oleh Infinite Learning</strong>, di luar program Kampus Merdeka (MSIB). Program ini dirancang untuk memberikan pengalaman belajar berbasis proyek nyata (real project) dengan bimbingan mentor industri." },
  { q: "Bedanya apa dengan MSIB?", a: "Program Mandiri Infinite Learning memiliki konsep pembelajaran dan pengalaman magang yang sama seperti Program MSIB Kampus Merdeka, namun dilaksanakan secara <strong>mandiri oleh Infinite Learning</strong> di luar program pemerintah. Artinya, peserta tetap mendapatkan kurikulum, mentor industri, dan proyek nyata — tetapi <strong>pendaftaran, pembiayaan, serta sertifikat</strong> dikelola langsung oleh Infinite Learning, bukan oleh Kemendikbudristek." },
  { q: "Siapa yang dapat mengikuti program Magang Studi Independen Mandiri di Infinite Learning?", a: "Program ini terbuka untuk <strong>mahasiswa aktif dari seluruh perguruan tinggi di Indonesia,</strong> baik negeri maupun swasta, dari berbagai jurusan yang ingin mengembangkan kompetensi digital, karier, dan profesionalisme di dunia kerja." },
  { q: "Apakah peserta akan mendapatkan konversi SKS?", a: "Ya, <strong>konversi SKS dimungkinkan</strong> tergantung pada kebijakan masing-masing kampus. Infinite Learning akan menyediakan dokumen pendukung (sertifikat, laporan kegiatan, hasil evaluasi, dan surat rekomendasi) yang dapat digunakan mahasiswa untuk mengajukan konversi SKS ke pihak kampus." },
  { q: "Pembelajaran online/offline?", a: "Seluruh kegiatan <strong>dilaksanakan secara online</strong> (daring) melalui platform pembelajaran interaktif Infinite Learning, lengkap dengan sesi mentoring, diskusi, dan proyek kolaboratif." },
  { q: "Apa benefit mengikuti program Mandiri di Infinite Learning?", a: "Peserta akan mendapatkan berbagai manfaat, di antaranya:<ol class='list-decimal pl-5 mt-2 space-y-1'><li>Pembelajaran berbasis proyek nyata (real project).</li><li>Bimbingan langsung dari mentor industri profesional.</li><li>Sertifikat resmi dari Infinite Learning.</li><li>Kesempatan networking nasional dan karier.</li><li>Pengalaman praktis yang memperkuat portofolio profesional.</li></ol>" },
  { q: "Bagaimana cara mendaftar Program Mandiri Batch 10 di Infinite Learning?", a: "Pendaftaran dapat dilakukan pada halaman Program Mandiri. Langkah-langkah:<ol class='list-decimal pl-5 mt-2 space-y-1'><li>Buka laman pendaftaran Program Mandiri.</li><li>Pilih batch dan bidang program yang diminati.</li><li>Lengkapi data diri dan unggah dokumen yang diminta.</li><li>Lakukan pembayaran biaya program sesuai instruksi.</li><li>Tunggu konfirmasi dan jadwal onboarding dari tim Infinite Learning.</li></ol>" },
  { q: "Bagaimana melakukan pembayaran?", a: "Pembayaran dapat dilakukan melalui <strong>transfer bank atau virtual account</strong> sesuai informasi resmi yang dikirimkan melalui email setelah pendaftaran berhasil dilakukan." }
];

const benefits = [
  { title: '2 Sertifikat Sekaligus', desc: 'Dapatkan Sertifikat Studi Independen & Magang Industri yang diakui perusahaan partner.' },
  { title: 'Portfolio Real Project', desc: 'Bangun portofolio nyata dari proyek kolaboratif yang bisa langsung kamu tunjukkan ke recruiter.' },
  { title: 'Mentor Industri Ahli', desc: 'Bimbingan langsung dari mentor teknikal dan profesional yang berpengalaman di bidangnya.' },
  { title: 'Persiapan Karir', desc: 'Review CV, simulasi interview, dan akses ke jaringan hiring partner kami.' },
  { title: 'Konversi hingga 20 SKS', desc: 'Program ini dapat dikonversikan menjadi SKS sesuai kebijakan kampus masing-masing.' },
  { title: 'Jaringan Profesional', desc: 'Kesempatan bekerja di perusahaan internasional dan multinasional melalui koneksi alumni.' },
];

const audiences = [
  { title: 'Mahasiswa', desc: 'Kamu nggak harus dari jurusan tertentu. Program ini bantu kamu belajar skill digital dari dasar dan siapin karier profesional.' },
  { title: 'Entrepreneur', desc: 'Punya bisnis atau baru mau mulai? Pahami cara mengembangkan bisnis lewat strategi digital dan inovasi teknologi.' },
  { title: 'Career Switcher', desc: 'Ingin transisi karier ke bidang digital? Program ini jadi jembatan realistis untuk upgrade skill tanpa kuliah ulang.' },
  { title: 'Freelancer', desc: 'Kerja fleksibel dari mana aja? Tingkatkan kemampuan digital dan bangun portofolio untuk proyek global.' },
];

const steps = [
  { num: '01', title: 'Lengkapi Data Diri', desc: 'Isi formulir pendaftaran dengan data yang valid.' },
  { num: '02', title: 'Verifikasi Data', desc: 'Pastikan data diri dan program yang dipilih sudah sesuai.' },
  { num: '03', title: 'Lakukan Pembayaran', desc: 'Bayar sesuai instruksi yang dikirimkan melalui Email.' },
  { num: '04', title: 'Cek Berkala', desc: 'Pantau Email atau Whatsapp untuk info onboarding.' },
];

const tiers = [
  { label: 'Early Bird',  date: '20 Okt – 30 Nov 2025', original: 'Rp 6.500.000', price: 'Rp 999.000', active: true,  soldOut: false, bestDeal: true, features: ['Akses Full Materi', 'Mentoring Intensif', 'Sertifikat Resmi'] },
  { label: 'Presale',     date: '01 Des – 31 Des 2025', original: 'Rp 6.500.000', price: 'Rp 1.500.000', active: false, soldOut: true,  bestDeal: false, features: [] },
  { label: 'Regular',     date: '01 Jan – 31 Jan 2026', original: 'Rp 6.500.000', price: 'Rp 2.500.000', active: false, soldOut: true,  bestDeal: false, features: [] },
];

export { faqs, benefits, audiences, steps, tiers };
