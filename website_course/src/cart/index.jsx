import { Link } from 'react-router-dom';
import { useCart } from '../data/cart';
import { courses } from '../data/courses';
import { ShoppingCart, Trash2, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

// `price` numerik dipakai untuk total; harga normal hanya untuk tampilan
// potongan, jadi cukup diturunkan dari string ("Rp 249.000" → 249000).
const toNumber = (text) => Number(String(text).replace(/\D/g, ''));

// Isi `il_cart` hanya slug. Detail (judul, harga, gambar) dibaca ulang dari
// `data/courses.js` — gambar adalah import ber-hash, tak bisa disimpan sebagai
// string di localStorage tanpa usang setiap build.
function Cart() {
  const cart = useCart();
  const items = cart.items
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter(Boolean);

  const subtotal = items.reduce((sum, course) => sum + course.price, 0);
  const original = items.reduce((sum, course) => sum + toNumber(course.priceOriginal), 0);

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-bg-base">
        <div className="w-16 h-16 rounded-2xl bg-bg-subtle border border-border-default flex items-center justify-center mb-6">
          <ShoppingCart className="w-8 h-8 text-text-muted" />
        </div>
        <h1 className="font-display font-bold text-xl md:text-2xl text-text-primary">
          Keranjangmu masih kosong
        </h1>
        <p className="text-text-secondary text-sm mt-3 max-w-md leading-relaxed">
          Belum ada kelas yang ditambahkan. Jelajahi program kami dan tambahkan
          kelas yang ingin kamu pelajari.
        </p>
        <Link
          to="/all-programs"
          className="btn-premium inline-flex items-center justify-center gap-2 bg-button-gradient text-white px-6 py-3 rounded-full font-bold text-sm shadow-glow mt-8"
        >
          Lihat Semua Program
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/all-programs"
          className="inline-flex items-center gap-2 text-text-muted text-xs font-semibold hover:text-brand-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Lanjut Belanja
        </Link>

        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight mb-2">
          Keranjang
        </h1>
        <p className="text-text-secondary text-sm mb-10">
          {items.length} kelas siap dipelajari.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <ul className="lg:col-span-2 space-y-4">
            {items.map((course) => (
              <li
                key={course.slug}
                className="flex gap-4 rounded-2xl border border-border-default bg-bg-surface p-4"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="hidden sm:block w-24 h-24 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="font-display font-bold text-sm leading-snug text-text-primary mb-1">
                    <Link
                      to={`/courses/${course.slug}`}
                      className="hover:text-brand-accent transition-colors"
                    >
                      {course.title}
                    </Link>
                  </h2>
                  <p className="text-text-muted text-[10px] font-medium mb-3">
                    {course.category} &middot; {course.type} &middot; {course.lessons} lessons
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-text-muted line-through text-xs">
                        {course.priceOriginal}
                      </span>
                      <span className="text-brand-accent font-bold text-base">
                        {course.priceDiscount}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => cart.remove(course.slug)}
                      aria-label={`Hapus ${course.title} dari keranjang`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Hapus
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="lg:sticky lg:top-24 rounded-2xl border border-border-default bg-bg-surface p-6">
            <h2 className="font-display font-bold text-base text-text-primary mb-4">
              Ringkasan
            </h2>
            <dl className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-text-muted">Harga normal</dt>
                <dd className="text-text-muted line-through">{rupiah.format(original)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-text-muted">Potongan</dt>
                <dd className="text-brand-accent">
                  &minus;{rupiah.format(original - subtotal)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-t border-divider pt-3">
                <dt className="font-semibold text-text-primary text-sm">Total</dt>
                <dd className="font-display font-extrabold text-xl text-text-primary">
                  {rupiah.format(subtotal)}
                </dd>
              </div>
            </dl>

            {/* Checkout butuh backend & dashboard tim lain — belum ada. */}
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Pembayaran belum tersedia"
              className="mt-6 w-full bg-bg-subtle border border-border-default text-text-muted px-5 py-3 rounded-full font-semibold text-sm cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Checkout Segera Hadir
            </button>
            <p className="text-text-muted text-[10px] text-center mt-3 leading-relaxed">
              Keranjang tersimpan di browser ini saja. Belum terhubung ke akun.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Cart;
