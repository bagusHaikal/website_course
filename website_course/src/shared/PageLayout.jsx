import { useState, useEffect, useRef } from 'react';
import SharedNavbar from './Navbar';
import Footer from './Footer';
import AuthModal from './AuthModal';

function PageLayout({ children }) {
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('login');
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

  const openAuthModal = (tab = 'login') => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const closeAuthModal = () => setModalOpen(false);

  return (
    <>
      <SharedNavbar
        navVisible={navVisible}
        scrolled={scrolled}
        onLoginClick={() => openAuthModal('login')}
        onRegisterClick={() => openAuthModal('register')}
      />
      <main className="pt-22">
        {children}
      </main>
      <Footer />
      <AuthModal
        isOpen={modalOpen}
        onClose={closeAuthModal}
        defaultTab={modalTab}
        onSwitchTab={setModalTab}
      />
    </>
  );
}

export default PageLayout;
