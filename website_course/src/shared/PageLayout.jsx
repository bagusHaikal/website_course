import { useState, useEffect, useRef } from 'react';
import SharedNavbar from './Navbar';
import Footer from './Footer';

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
      <SharedNavbar navVisible={navVisible} scrolled={scrolled} />
      <main className="pt-20 md:pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;
