import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Home from './home';
import ProgramMandiri from './program-mandiri';
import Bootcamp from './bootcamp';
import Workshop from './workshop';
import PageLayout from './shared/PageLayout';
import CorporateTraining from './corporate-training';
import BelajarMandiri from './belajar-mandiri';
import AllPrograms from './all-programs';
import Partnership from './partnership';
import HireOurGraduates from './hire-graduates';
import SharedNavbar from './shared/Navbar';
import Footer from './shared/Footer';
import AuthModal from './shared/AuthModal';
import ScrollToTop from './shared/ScrollToTop';

function CorporateTrainingPage() {
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
      <main>
        <CorporateTraining />
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/program-mandiri" element={<PageLayout><ProgramMandiri /></PageLayout>} />
        <Route path="/bootcamp" element={<PageLayout><Bootcamp /></PageLayout>} />
        <Route path="/workshop" element={<PageLayout><Workshop /></PageLayout>} />
        <Route path="/belajar-mandiri" element={<PageLayout><BelajarMandiri /></PageLayout>} />
        <Route path="/all-programs" element={<PageLayout><AllPrograms /></PageLayout>} />
        <Route path="/corporate-training" element={<CorporateTrainingPage />} />
        <Route path="/partnership" element={<PageLayout><Partnership /></PageLayout>} />
        <Route path="/hire-our-graduates" element={<PageLayout><HireOurGraduates /></PageLayout>} />
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
