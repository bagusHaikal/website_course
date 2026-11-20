import { Link } from 'react-router-dom';
import { ArrowLeft, SearchX } from 'lucide-react';

// Halaman fallback untuk URL yang tidak dikenal. Tanpa ini, React Router
// merender layar kosong total — tanpa Navbar, tanpa Footer, tanpa jalan pulang.
function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-bg-base">
      <div className="w-16 h-16 rounded-2xl bg-bg-subtle border border-border-default flex items-center justify-center mb-6">
        <SearchX className="w-8 h-8 text-text-muted" />
      </div>

      <p className="font-display font-extrabold text-5xl md:text-6xl text-text-primary tracking-tight">
        404
      </p>
      <h1 className="font-display font-bold text-xl md:text-2xl text-text-primary mt-3">
        Halaman tidak ditemukan
      </h1>
      <p className="text-text-secondary text-sm mt-3 max-w-md leading-relaxed">
        Alamat yang kamu tuju tidak tersedia atau sudah dipindahkan. Coba kembali
        ke beranda atau lihat daftar program kami.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
        <Link
          to="/"
          className="btn-premium inline-flex items-center justify-center gap-2 bg-button-gradient text-white px-6 py-3 rounded-full font-bold text-sm shadow-glow"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
        <Link
          to="/all-programs"
          className="inline-flex items-center justify-center gap-2 border border-border-default text-text-primary px-6 py-3 rounded-full font-semibold text-sm hover:border-border-hover hover:bg-bg-subtle transition-all"
        >
          Lihat Semua Program
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
