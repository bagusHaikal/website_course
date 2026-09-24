import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Home from './home';
import ProgramMandiri from './program-mandiri';
import SharedNavbar from './shared/Navbar';
import Footer from './shared/Footer';
import AuthModal from './shared/AuthModal';

function ProgramMandiriPage() {
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
        <ProgramMandiri />
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

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program-mandiri" element={<ProgramMandiriPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
