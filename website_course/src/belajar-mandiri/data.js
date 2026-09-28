import bannerBelajarMandiri from '../assets/BannerBelajarMandiri.webp';
import bannerComingSoon from '../assets/BannerComingSoon.webp';
import bannerComingSoon2 from '../assets/BannerComingSoon2.webp';
import { courses } from '../data/courses';

const waLink = 'https://chat.whatsapp.com/In7DX2H8jh307QU2VQAwKL';

const hero = {
  titlePre: 'Belajar tanpa Batas,',
  titleHighlight: 'Kapan Pun & Di Mana Pun',
  desc: 'Sekarang, belajar nggak harus ribet dan terbatas waktu!',
  descDetail: 'Di sini, kamu bisa akses materi seru dan bermanfaat kapan aja, dari mana aja—cocok buat yang mau upgrade skill tanpa kebingungan.',
  cta: 'Mulai Belajar Sekarang',
  image: bannerBelajarMandiri,
};

const kelasMandiri = {
  title: 'Pengen Belajar Sendiri Tanpa Tersesat? Coba Kelas Mandiri',
  desc: 'Belajar makin seru bareng Kelas Mandiri! Dapatkan materi interaktif, soal latihan, template, dan bonus lainnya.',
  seeAllLabel: 'Lihat Semua',
};

const comingSoon = [
  {
    id: 'project',
    title: 'Coming Soon Project!',
    desc: 'Latihan mandiri dari studi kasus nyata—fleksibel dikerjakan, siap jadi amunisi portofolio!',
    descDetail: 'Ga sabar buat ngerjain project baru ini bareng mentor-mentor? Pantengin info update-nya di sini!',
    cta: 'JOIN GRATIS!',
    image: bannerComingSoon,
  },
  {
    id: 'certification',
    title: 'Coming Soon Your Official Certification!',
    desc: 'Pilih bidang uji sesuai passion kamu dan naikkan level kariermu lewat sertifikasi kompetensi.',
    descDetail: 'Ga sabar buat nunjukin skill kamu dan dapetin sertifikat resminya? Pilih bidang dan level uji yang kamu mau, yuk!',
    cta: 'JOIN GRATIS!',
    image: bannerComingSoon2,
  },
];

export { hero, kelasMandiri, comingSoon, waLink, courses };
