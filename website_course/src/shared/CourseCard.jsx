import { Link } from 'react-router-dom';
import { CheckCircle2, LayoutGrid, BookOpen, ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { useCart, useWishlist } from '../data/cart';

const iconButton =
  'h-10 w-10 shrink-0 rounded-full border inline-flex items-center justify-center transition-colors';

function CourseCard({ course, showDetails = false, baseSurface = false }) {
  const cart = useCart();
  const wishlist = useWishlist();
  // Kunci pakai `slug` — `bootcamp/data.js` memakai id slug, `data/courses.js`
  // memakai id numerik. Tanpa ini keranjang & wishlist tidak sinkron antar halaman.
  const key = course.slug;
  const inCart = cart.items.includes(key);
  const saved = wishlist.has(key);

  return (
    <div className={`rounded-2xl border border-border-default ${baseSurface ? 'bg-bg-base' : 'bg-bg-surface'} overflow-hidden transition-all duration-300 hover:border-brand-accent/30 hover:shadow-glow-hover flex flex-col`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t via-transparent to-transparent from-white/60 dark:from-bg-base"></div>
        <span className="absolute top-3 left-3 z-10 bg-brand-purple text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md">
          Kelas Mandiri
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col relative z-10">
        <h3 className="font-display font-bold text-base text-text-primary mb-2 leading-snug line-clamp-3 min-h-12 tracking-tight">
          {course.slug ? (
            <Link
              to={`/courses/${course.slug}`}
              className="hover:text-brand-accent transition-colors"
            >
              {course.title}
            </Link>
          ) : (
            course.title
          )}
        </h3>

        {course.desc ? (
          <p className="text-text-secondary text-xs mb-4 line-clamp-2 leading-[1.6]">{course.desc}</p>
        ) : (
          <div className="mb-4" />
        )}

        <div className="flex items-center justify-between text-text-muted text-[10px] font-medium mb-4 border-b border-divider pb-3">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
            {course.category}
          </div>
          <div className="flex items-center gap-1.5">
            <LayoutGrid className="w-3.5 h-3.5 text-brand-accent" />
            {course.type}
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary">
            <BookOpen className="w-3.5 h-3.5" />
            {course.lessons} lessons
          </div>
        </div>

        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-text-muted line-through text-xs">{course.priceOriginal}</span>
          <span className="text-brand-accent font-bold text-lg">{course.priceDiscount}</span>
        </div>

        <div className={`mt-4 flex items-center gap-2 ${showDetails ? '' : 'justify-end'}`}>
          {showDetails && (
            course.slug ? (
              <Link
                to={`/courses/${course.slug}`}
                className="btn-premium bg-button-gradient text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-glow inline-flex items-center justify-center gap-2 flex-1"
              >
                Lihat Detail
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Detail kelas belum tersedia"
                className="bg-bg-subtle border border-border-default text-text-muted px-5 py-2.5 rounded-full font-semibold text-sm cursor-not-allowed inline-flex items-center justify-center gap-2 flex-1"
              >
                Segera Hadir
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => wishlist.toggle(key)}
            aria-pressed={saved}
            aria-label={saved ? 'Hapus dari wishlist' : 'Simpan ke wishlist'}
            title={saved ? 'Hapus dari wishlist' : 'Simpan ke wishlist'}
            className={`${iconButton} ${saved
              ? 'border-red-500/40 bg-red-500/10 text-red-500'
              : 'border-border-default bg-bg-subtle text-text-muted hover:text-red-500 hover:border-red-500/40'}`}
          >
            <Heart className={`h-5 w-5 ${saved ? 'fill-current' : ''}`} />
          </button>

          <button
            type="button"
            onClick={() => cart.toggle(key)}
            aria-pressed={inCart}
            aria-label={inCart ? 'Hapus dari keranjang' : 'Tambah ke keranjang'}
            title={inCart ? 'Hapus dari keranjang' : 'Tambah ke keranjang'}
            className={`${iconButton} ${inCart
              ? 'border-brand-accent/50 bg-brand-accent/15 text-brand-accent'
              : 'border-border-default bg-bg-subtle text-text-muted hover:text-brand-accent hover:border-brand-accent/40'}`}
          >
            <ShoppingCart className={`h-5 w-5 ${inCart ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
