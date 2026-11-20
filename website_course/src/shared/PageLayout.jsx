import { useState, useEffect, useRef, Suspense } from 'react';
import SharedNavbar from './Navbar';
import Footer from './Footer';
import PageLoading from './PageLoading';

function PageLayout({ children }) {
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > 100) {
        setNavVisible(y <= lastScrollY.current);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Elemen fokusable pertama di halaman. Tanpa ini pengguna keyboard harus
          melewati ±17 tab stop Navbar di SETIAP halaman, karena Navbar `fixed`.
          `tabIndex={-1}` pada <main> wajib agar fokus benar-benar berpindah,
          bukan sekadar scroll lalu Tab berikutnya balik ke Navbar. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-200 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-bg-surface focus:text-text-primary focus:border focus:border-border-default focus:shadow-glass"
      >
        Lewati ke konten
      </a>
      <SharedNavbar navVisible={navVisible} scrolled={scrolled} />
      <main id="main-content" tabIndex={-1} className="pt-16">
        {/* Suspense di sini (bukan di App.jsx) supaya Navbar & Footer tetap
            terlihat selama chunk route diunduh. */}
        <Suspense fallback={<PageLoading />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;
