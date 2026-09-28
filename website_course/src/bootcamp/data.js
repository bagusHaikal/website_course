import bootcampImg from '../assets/bootcamp.png';
import portfolioImg from '../assets/bootcamp-portfolio.webp';
import dataDrivenImg from '../assets/bootcamp-datadriven.webp';
import englishImg from '../assets/bootcamp-english.webp';
import excelImg from '../assets/bootcamp-excel.webp';
import mentorImg from '../assets/bootcamp-mentor-arifian.png';
import testiAgistira from '../assets/testi-agistira.png';
import testiAprido from '../assets/testi-aprido.png';
import testiAtta from '../assets/testi-atta.webp';
import testiPupu from '../assets/testi-pupu.webp';
import testiSari from '../assets/testi-sari.webp';
import testiBudi from '../assets/testi-budi.webp';
import testiKiel from '../assets/testi-kiel.webp';

const waLink = 'https://wa.me/6287765271402?text=Halo%20Admin%20Infinite%20Learning%2C%20saya%20ingin%20konsultasi%20gratis%20terkait%20kelas%20yang%20tersedia.%20Saat%20ini%20saya%20tertarik%20di%20bidang%20%5BISI%20BIDANG%20DISINI%5D%20dan%20ingin%20tahu%20rekomendasi%20yang%20cocok.';

const hero = {
  image: bootcampImg,
  titlePre: 'Bootcamp untuk',
  titleHighlight: 'Jobseeker!',
  desc: 'Masih merasa kemampuanmu belum kelihatan padahal sudah berusaha keras? Waktunya upgrade diri bareng kami.',
  descDetail: 'Full online, dipandu praktisi senior, dan praktis lebih dari sekadar webinar. Kita belajar bareng dari skill teknis, portofolio profesional, hingga persiapan dunia kerja — dengan cara yang bisa diikuti siapa saja.',
  ctaDetail: 'Lihat Detail Bootcamp',
  ctaConsult: 'Konsultasi Gratis',
};

const courses = [
  {
    id: 'professional-portfolio',
    title: 'Build Your First Professional Portfolio (Even If You Have 0 Experience)',
    desc: 'Banyak orang merasa minder bikin portofolio karena belum punya pengalaman. Di sini kamu dibimbing dari nol sampai punya portofolio profesional yang dilirik recruiter.',
    category: 'Non Technical',
    tag: 'kelas mandiri',
    lessons: 4,
    priceOriginal: 'Rp 249.000',
    priceDiscount: 'Rp 59.000',
    image: portfolioImg,
  },
  {
    id: 'data-driven',
    title: 'Data Driven Decision Making with AI Assistance',
    desc: 'Modul ini tidak hanya mengasah kemampuan analisis data, tapi juga membiasakanmu mengambil keputusan bisnis yang tepat dengan bantuan AI.',
    category: 'Data Analysts',
    tag: 'kelas mandiri',
    lessons: 2,
    priceOriginal: 'Rp 299.000',
    priceDiscount: 'Rp 69.000',
    image: dataDrivenImg,
  },
  {
    id: 'english-for-industrial',
    title: 'English for Industrial Job Applications: Stand Out & Get Hired',
    desc: 'Kelas ini fokus pada Bahasa Inggris yang dibutuhkan untuk melamar kerja di lingkungan industri, supaya kamu menonjol dan terpilih.',
    category: 'Non Technical',
    tag: 'kelas mandiri',
    lessons: 6,
    priceOriginal: 'Rp 299.000',
    priceDiscount: 'Rp 69.000',
    image: englishImg,
  },
  {
    id: 'excel-made-easy',
    title: 'Excel Made Easy',
    desc: 'Pernah menerima data mentah yang berantakan? Pelajari cara merapikan, memformat, dan menganalisis data di Excel dengan teknik yang praktis.',
    category: 'Data Analysts',
    tag: 'kelas mandiri',
    lessons: 3,
    priceOriginal: 'Rp 199.000',
    priceDiscount: 'Rp 49.000',
    image: excelImg,
  },
];

const benefits = [
  { icon: 'book', title: 'Kurikulum Berbasis Industri', desc: 'Materi dirancang sesuai kebutuhan industri, tapi tetap disampaikan dengan cara yang mudah kamu ikuti.' },
  { icon: 'grid', title: 'Collaboration Project & Portofolio', desc: 'Tidak hanya teori, kamu akan mengerjakan proyek nyata berbasis kolaborasi untuk memperkuat portofolio.' },
  { icon: 'users', title: 'Pengembangan Soft Skill', desc: 'Nggak cuma jago teknis, tapi juga makin percaya diri, komunikatif, dan siap kerja tim.' },
  { icon: 'check', title: 'Pendampingan Mentor Profesional', desc: 'Mentor nggak cuma mengajarin, tapi juga menemani kamu berkembang dengan dukungan penuh di setiap langkah.' },
  { icon: 'briefcase', title: 'Dukungan Karier Menyeluruh', desc: 'Dari CV, interview, sampai LinkedIn — kita bantu kamu tampil maksimal di mata perusahaan.' },
  { icon: 'chart', title: 'Peluang Kerja Lebih Besar', desc: 'Setiap langkah di bootcamp ini dirancang untuk mendekatimu ke pintu karier yang lebih luas.' },
];

const mentor = {
  name: 'Arifian',
  role: 'Senior Praktisi & Career Mentor',
  image: mentorImg,
  bio: 'Praktisi senior yang telah mendampingi ratusan peserta bootcamp, dari skill teknis, membangun portofolio profesional, hingga persiapan menghadapi dunia kerja.',
  points: ['Pendampingan intensif selama program', 'Review portofolio & CV satu per satu', 'Simulasi interview bersama'],
};

const installment = {
  title: 'Bayar Bootcamp Jadi Lebih Ringan',
  subtitle: 'Nikmati opsi pembayaran fleksibel dengan Cicilan',
  desc: 'Tidak perlu merogoh kocek penuh di awal. Selesaikan pembayaranmu secara bertahap supaya kamu bisa fokus belajar dan mempersiapkan karier.',
  image: bootcampImg,
  points: [
    'Pembayaran bertahap dengan tenor fleksibel',
    'Verifikasi cepat tanpa proses berbelit',
    'Fokus belajar tanpa beban biaya di awal',
  ],
};

const testimonials = [
  { name: 'Agistira Lamunde', program: 'Android Development 2020', company: 'AIA Singapore', linkedin: 'https://www.linkedin.com/in/agistira-lamunde/', image: testiAgistira },
  { name: 'Aprido Syawindra', program: 'Hybrid Cloud and AI 2023', company: 'PT. Berca Hardayaperkasa', linkedin: 'https://www.linkedin.com/in/aprido-syawindra-32a406207/', image: testiAprido },
  { name: 'Atta Pratiwa', program: 'Android Development 2021', company: 'Elabram Group', linkedin: 'https://www.linkedin.com/in/attar-pratiwa-b9b960bb/', image: testiAtta },
  { name: 'Siti Maharani Putri', program: 'Android Development 2023', company: "Kartini's Label", linkedin: 'https://www.linkedin.com/in/siti-maharani-putri-0247a3258/', image: testiPupu },
  { name: 'Sari Rahmawati', program: 'Android Development 2022', company: 'MS Glow Beauty', linkedin: 'https://www.linkedin.com/in/sarirahm/', image: testiSari },
  { name: 'Budi Prayoga', program: 'Website Development 2022', company: 'Seiko Epson Corporation', linkedin: 'https://www.linkedin.com/in/budiprayoga/', image: testiBudi },
  { name: 'Kiel Tampubolon', program: 'Hybrid Cloud and AI 2023', company: 'Constellar', linkedin: null, image: testiKiel },
];

export { hero, courses, benefits, mentor, installment, testimonials, waLink };
