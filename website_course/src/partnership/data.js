export const WA_LINK = 'https://wa.me/6282387597266';
export const EMAIL_LINK = 'mailto:info@infinitelearning.id';

export const collaborationTypes = [
  {
    id: 'education-csr',
    title: 'Education CSR',
    description: 'Infinite Learning dapat menjadi partner kolaborasi untuk CSR bidang pendidikan, mulai dari pelatihan komunitas hingga pemberian beasiswa sesuai kebutuhan perusahaan.',
    icon: 'heart',
  },
  {
    id: 'event-partner',
    title: 'Event Partner',
    description: 'Ingin mengadakan event tapi tidak memiliki tim yang mengurusi? Serahkan seluruh eksekusinya kepada Infinite Learning.',
    icon: 'calendar',
  },
  {
    id: 'digital-lab',
    title: 'Digital Laboratorium',
    description: 'Mari dukung sekolah dan kampus dengan keterbatasan sumber daya melalui pembangunan laboratorium digital bersama Infinite Learning.',
    icon: 'cpu',
  },
  {
    id: 'hiring-partner',
    title: 'Hiring Partner',
    description: 'Temukan talent yang tepat sesuai kebutuhan perusahaan dari ribuan alumni dan mentee Infinite Learning.',
    icon: 'briefcase',
  },
];

export const collaborationForms = [
  {
    id: 'education-csr',
    label: 'Education CSR',
    programs: [
      { id: 'institution-training', title: 'Institution Training', description: 'Memberikan materi pembelajaran kepada siswa/i maupun guru dari sekolah/kampus agar tetap up-to-date dengan perkembangan industri.', icon: 'book' },
      { id: 'community-training', title: 'Community Training', description: 'Melatih dan mengembangkan komunitas di area sekitar, terutama di bidang digitalisasi.', icon: 'users' },
      { id: 'extracurricular', title: 'Extracurricular Program', description: 'Mengadakan program ekstrakulikuler dengan pengajar dari industri agar siswa/i dibekali skill yang relevan dengan kebutuhan dunia kerja.', icon: 'zap' },
    ],
  },
  {
    id: 'event-partner',
    label: 'Event Partner',
    programs: [
      { id: 'event-collaboration', title: 'Event Collaboration', description: 'Ingin mengadakan event tapi minim sumber daya? Infinite Learning siap mendukung sebagai partner eksekusi.', icon: 'calendar' },
      { id: 'event-support', title: 'Event Support', description: 'Infinite Learning siap mendukung event Anda dalam bentuk penyediaan narasumber, juri, pelatih, dan sebagainya.', icon: 'megaphone' },
      { id: 'digital-competition', title: 'Digital Competition', description: 'Infinite Learning berpengalaman menyelenggarakan kompetisi digital untuk membantu kampanye klien kami.', icon: 'flag' },
    ],
  },
  {
    id: 'digital-lab',
    label: 'Digital Laboratorium',
    programs: [
      { id: 'hardware-donation', title: 'Hardware Donation', description: 'Menyumbangkan perangkat seperti PC atau tools spesifik untuk praktik di bidang tertentu.', icon: 'cpu' },
    ],
  },
  {
    id: 'hiring-partner',
    label: 'Hiring Partner',
    programs: [
      { id: 'internship', title: 'Internship Collaboration', description: 'Sedang mencari talent untuk magang? Infinite Learning memiliki banyak mentee dan alumni yang siap direkrut sebagai intern.', icon: 'briefcase' },
      { id: 'absorption', title: 'Penyerapan Tenaga Kerja', description: 'Kerja sama menyerap lulusan Infinite Learning yang telah terlatih dan siap bekerja untuk memperkuat tim Anda.', icon: 'badge' },
      { id: 'augmented-resources', title: 'Augmented Resources', description: 'Butuh SDM tambahan tanpa menambah headcount? Infinite Learning dapat menjadi outsourcer proyek dengan tim yang sesuai, kompeten, dan dedicated.', icon: 'layers' },
    ],
  },
];

export const caseStudies = [
  {
    id: 'bank-indonesia',
    partner: 'Bank Indonesia',
    monogram: 'BI',
    role: 'Event Partner',
    description: 'Infinite Learning mengadakan Digital Competition bersama Bank Indonesia untuk kampanye Cinta, Bangga, dan Paham Rupiah kepada siswa/i dan mahasiswa di Kepulauan Riau.',
  },
  {
    id: 'atr-bpn',
    partner: 'ATR / BPN',
    monogram: 'ATR',
    role: 'Education Partner',
    description: 'Infinite Learning bersama ATR/BPN menggelar pelatihan digital marketing bagi 50 UMKM di Batam.',
  },
  {
    id: 'airbus',
    partner: 'Airbus',
    monogram: 'AIR',
    role: 'Hiring Partner',
    description: 'Infinite Learning menyediakan layanan augmented resources untuk Airbus: menjaring 3 data analyst serta menangani seluruh proses administrasi dan payroll proyek.',
  },
];

export const consultationBenefits = [
  { id: 'analysis', step: '01', title: 'Analisis Kebutuhan', description: 'Memahami tantangan dan target atau goals yang ingin dicapai.' },
  { id: 'recommendation', step: '02', title: 'Rekomendasi Program', description: 'Dapatkan rekomendasi program yang paling sesuai dengan kebutuhan dan tingkat keahlian tim Anda.' },
  { id: 'roadmap', step: '03', title: 'Personalized Roadmap', description: 'Kami menyusun roadmap yang dipersonalisasi berdasarkan hasil diskusi kebutuhan.' },
];
