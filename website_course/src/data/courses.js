import portfolioImg from '../assets/bootcamp-portfolio.webp';
import dataDrivenImg from '../assets/bootcamp-datadriven.webp';
import englishImg from '../assets/bootcamp-english.webp';
import excelImg from '../assets/bootcamp-excel.webp';
import agistiraImg from '../assets/testi-agistira.png';
import apridoImg from '../assets/testi-aprido.png';
import attaImg from '../assets/testi-atta.webp';
import pupuImg from '../assets/testi-pupu.webp';
import sariImg from '../assets/testi-sari.webp';
import budiImg from '../assets/testi-budi.webp';
import kielImg from '../assets/testi-kiel.webp';

export const courses = [
  {
    id: 1,
    title: "Build Your First Professional Portfolio (Even If You Have 0 Experience)",
    desc: "Banyak orang merasa minder bikin portofolio karena belum...",
    category: "Non Technical",
    type: "Satuan",
    priceOriginal: "Rp 249.000",
    priceDiscount: "Rp 59.000",
    lessons: 4,
    image: portfolioImg,
    slug: "professional-portfolio"
  },
  {
    id: 2,
    title: "Data Driven Decision Making With AI Assistance",
    desc: "Untuk mengasah keahlian kita, modul ini tidak hanya...",
    category: "Technical",
    type: "Satuan",
    priceOriginal: "Rp 299.000",
    priceDiscount: "Rp 69.000",
    lessons: 2,
    image: dataDrivenImg,
    slug: "data-driven"
  },
  {
    id: 3,
    title: "English For Industrial Job Applications : Stand Out & Get Hired",
    desc: "This class focuses on the English required for...",
    category: "Non Technical",
    type: "Paketan",
    priceOriginal: "Rp 299.000",
    priceDiscount: "Rp 69.000",
    lessons: 6,
    image: englishImg,
    slug: "english-for-industrial"
  },
  {
    id: 4,
    title: "Excel Made Easy",
    desc: "Pernah nggak sih, dapet data mentah yang berantakan...",
    category: "Technical",
    type: "Satuan",
    priceOriginal: "Rp 199.000",
    priceDiscount: "Rp 49.000",
    lessons: 3,
    image: excelImg,
    slug: "excel-made-easy"
  }
];

export const faqs = [
  { q: "Program apa yang Infinite Learning Tawarkan?", a: "Kami menawarkan berbagai macam program seperti Programming, Design hingga Digital Marketing." },
  { q: "Berapa Biaya yang Dibutuhkan?", a: "Setiap program memiliki harga yang berbeda. Silakan kunjungi halaman Program untuk detail harga." },
  { q: "Saya Tidak Memiliki Latar Belakang IT, Bisakah Mengikuti?", a: "Ya tentu saja, Infinite Learning menyambut semua orang karena kami percaya #AnyoneAnything." },
  { q: "Apakah Saya Akan Mendapatkan Sertifikat?", a: "Ya, Infinite Learning akan memberikan sertifikat resmi untuk semua lulusan." },
  { q: "Berapa Lama Program Berlangsung?", a: "Durasi bervariasi tergantung program. Cek detail di halaman masing-masing program." },
  { q: "Apakah Ada Program Gratis?", a: "Ya! Kami sering menawarkan workshop dan webinar gratis. Follow IG @infinitelearning_id." }
];

export const alumniData = [
  {
    id: 'agistira',
    name: 'Agistira Lamunde',
    program: 'Android Development 2020',
    company: 'AIA Singapore',
    image: agistiraImg,
    linkedin: 'https://www.linkedin.com/in/agistira-lamunde/'
  },
  {
    id: 'aprido',
    name: 'Aprido Syawindra',
    program: 'Hybrid Cloud and AI 2023',
    company: 'PT Berca Hardayaperkasa',
    image: apridoImg,
    linkedin: 'https://www.linkedin.com/in/aprido-syawindra-32a406207/'
  },
  {
    id: 'atta',
    name: 'Atta Pratiwa',
    program: 'Android Development 2021',
    company: 'Elabram Group',
    image: attaImg,
    linkedin: 'https://www.linkedin.com/in/attar-pratiwa-b9b960bb/'
  },
  {
    id: 'pupu',
    name: 'Siti Maharani Putri',
    program: 'Android Development 2023',
    company: "Kartini's Label",
    image: pupuImg,
    linkedin: 'https://www.linkedin.com/in/siti-maharani-putri-0247a3258/'
  },
  {
    id: 'sari',
    name: 'Sari Rahmawati',
    program: 'Android Development 2022',
    company: 'MS Glow Beauty',
    image: sariImg,
    linkedin: 'https://www.linkedin.com/in/sarirahm/'
  },
  {
    id: 'budi',
    name: 'Budi Prayoga',
    program: 'Website Development 2022',
    company: 'Seiko Epson Corporation',
    image: budiImg,
    linkedin: 'https://www.linkedin.com/in/budiprayoga/'
  },
  {
    id: 'kiel',
    name: 'Kiel Tampubolon',
    program: 'Hybrid Cloud and AI 2023',
    company: 'Constellar',
    image: kielImg,
    linkedin: 'https://www.linkedin.com/in/kiel-tampubolon-6b6a25121/'
  }
];
