import skillBuilderImg from '../assets/Skill-Builder.png';
import mentorImg from '../assets/bootcamp-mentor-arifian.png';

const hero = {
  badge: 'Beginner Friendly',
  titlePre: 'Workshop For Skill Builder:',
  titleHighlight: 'Data Science',
  subtitle: 'Intensive Data Science training only for 5 days',
  duration: '5 Days',
  time: '19:00 - 22:00 WIB',
  highlights: [
    'Live mentoring session',
    'Projects and Portfolio',
    'Free access to modules',
  ],
  ctaRegister: 'Daftar Sekarang',
  ctaConsult: 'Konsultasi Program',
  image: skillBuilderImg,
};

const prospect = {
  label: 'Prospek Karir',
  title: 'Kenapa Data Science?',
  desc: 'Data Scientist merupakan salah satu karir dengan prospek besar di masa depan.',
  stat: '1000+',
  statLabel: 'lowongan Data Scientist yang dibuka saat ini',
};

const benefits = [
  { icon: '📊', title: 'Pemahaman Mendalam Data & Visualisasi', desc: 'Mempresentasikan hasil temuan dari data secara jelas dan menarik.' },
  { icon: '📈', title: 'Fundamental Statistik & Machine Learning', desc: 'Membuat analisis data yang lebih cakap dan mendalam.' },
  { icon: '📁', title: 'Mini Capstone sebagai Portofolio', desc: 'Hands-on project yang bisa ditunjukkan langsung ke recruiter.' },
  { icon: '👥', title: 'Interaksi Langsung dengan Mentor', desc: 'Berdiskusi langsung dengan mentor yang berpengalaman.' },
  { icon: '💼', title: 'Skill yang Bisa Langsung Dipraktikkan', desc: 'Semua keterampilan dan teknik bisa diaplikasikan dalam pekerjaan atau project.' },
  { icon: '♾️', title: 'Akses Materi & Rekaman Seumur Hidup', desc: 'Belajar kapan saja, di mana saja, untuk pendalaman lebih lanjut.' },
];

const syllabus = [
  { num: '01', title: 'Data Science & Python for Data Fundamental', items: ['Apa itu Data Science?', 'Workflow Data Science (EDA, Modeling, Deployment)', 'Python dasar untuk Data Science'] },
  { num: '02', title: 'Data Cleaning & Visualization', items: ['Data Cleaning: Handling missing values, outliers, duplicates', 'Data Wrangling: Grouping, filtering, aggregation', 'Data Visualization dengan Matplotlib & Seaborn'] },
  { num: '03', title: 'Basic Statistics & Intro Machine Learning', items: ['Statistik Deskriptif', 'Korelasi & Distribusi', 'Pengenalan Machine Learning (Supervised vs Unsupervised)'] },
  { num: '04', title: 'Mini Capstone Project - EDA & Model Training', items: ['Memilih dataset untuk project', 'EDA (Cleaning & Visualization)', 'Split data & melatih model ML sederhana'] },
  { num: '05', title: 'Model Evaluation & Final Presentation', items: ['Evaluasi Model: MSE, Accuracy, Confusion Matrix', 'Interpretasi hasil model'] },
];

const mentor = {
  name: 'Arifian',
  role: 'Head of AI Development Program',
  image: mentorImg,
  bio: 'Seorang profesional di bidang Data & AI dengan pengalaman sebagai technical mentor. Saat ini, ia menjabat sebagai Head of AI Development Program di Infinite Learning.',
  details: 'Arifian memiliki keahlian dalam Data dan Artificial Intelligence, dan telah membimbing banyak mentee dalam pengembangan machine learning, data science, AI governance, hingga model deployment. Selain itu, Arifian merupakan RHCSA Certified (Red Hat Certified System Administrator) dan pernah menjadi Certified Instructor di IBM Academy.',
};

const pricing = {
  title: 'Biaya Pembayaran',
  subtitle: 'Harga normal Rp 250.000. Amankan Early-Bird sekarang sebelum kehabisan!',
};

const tiers = [
  { label: 'Early-Bird Sale', date: 'Segera dibuka', original: 'Rp 250.000', price: 'Segera Diumumkan', active: true, soldOut: false, bestDeal: true, features: ['Akses Live Session 5 Hari', 'Mini Capstone & Rekaman', 'Sertifikat Kelulusan'] },
  { label: 'Promo Pre-Sale', date: 'Segera dibuka', original: 'Rp 250.000', price: 'Segera Diumumkan', active: false, soldOut: false, bestDeal: false, features: [] },
  { label: 'Harga Normal', date: 'Segera dibuka', original: '', price: 'Rp 250.000', active: false, soldOut: false, bestDeal: false, features: [] },
];

const timeline = {
  nextBatch: 'Next Batch',
  registration: { label: 'Pendaftaran', value: 'Segera Diumumkan' },
  learning: { label: 'Pembelajaran', value: '5 Hari | 19:00 - 22:00 WIB' },
};

const audiences = [
  { icon: '🌱', title: 'Pemula', desc: 'Yang ingin memahami dasar-dasar Data Science tanpa harus punya background IT.' },
  { icon: '🎓', title: 'Fresh Graduate', desc: 'Yang ingin menambah skill baru sebelum memasuki dunia kerja.' },
  { icon: '🔄', title: 'Career Switcher', desc: 'Yang tertarik berpindah ke bidang data dan ingin mencoba dulu sebelum mengambil program lebih panjang.' },
  { icon: '🚀', title: 'Sudah Berpengalaman', desc: 'Yang ingin upskill dalam bidang data science.' },
];

const faqs = [
  { q: 'Saya tidak memiliki background IT dan minim basic di bidang data, apakah tetap bisa ikut program ini?', a: 'Tentu! Program ini dirancang cocok untuk semua kalangan, dari kilas balik mengenai dasar data hingga bagian yang lebih mendalam. Jika kamu belum punya basic sama sekali dan ingin explore tentang data terlebih dahulu, kamu bisa mengikuti <strong>Workshop Data</strong> sebagai pengenalan dasar.' },
  { q: 'Apakah sistem pembelajarannya online, offline, atau hybrid?', a: 'Workshop Data Science dilaksanakan <strong>100% online</strong>, melalui Zoom Meeting (untuk live session) maupun melalui LMS (untuk asynchronous).' },
  { q: 'Apakah ada spesifikasi minimal untuk laptop/PC?', a: 'Laptop/PC dengan OS Windows atau macOS, RAM minimal 4GB (disarankan 8GB), serta koneksi internet stabil minimal 10 Mbps.' },
  { q: 'Apakah capstone project akan dikerjakan secara pribadi atau dengan tim?', a: 'Secara <strong>pribadi</strong>. Setiap peserta memilih dataset sendiri dan mengerjakan Mini Capstone dengan pendampingan mentor.' },
  { q: 'Apakah peserta akan dicarikan pekerjaan setelah lulus?', a: 'Setelah lulus, kami akan membantu kamu untuk mencari lowongan pekerjaan, hingga proses seleksi dan interview.' },
  { q: 'Apakah peserta akan mendapatkan sertifikat?', a: 'Tentu! Semua peserta yang berhasil menyelesaikan program akan mendapatkan sertifikat kelulusan, dengan syarat kehadiran dan keaktifan minimal 75% serta penyelesaian capstone project sesuai ketentuan.' },
];

export { hero, prospect, benefits, syllabus, mentor, pricing, tiers, timeline, audiences, faqs };
