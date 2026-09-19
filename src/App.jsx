import { useEffect, useRef, useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import ProgramSlider from './components/ProgramSlider';
import Alumni from './components/Alumni';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function AppContent() {
  const { user } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [searchQuery, setSearchQuery] = useState('');
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const courseSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > 100) {
        setNavVisible(currentY <= lastScrollY.current);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLogin = () => { setAuthTab('login'); setAuthOpen(true); };
  const openRegister = () => { setAuthTab('register'); setAuthOpen(true); };
  const closeAuth = () => setAuthOpen(false);

  const handleSearchResultClick = (course) => {
    setSearchQuery(course.title);
    setTimeout(() => courseSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar
        onResultClick={handleSearchResultClick}
        navVisible={navVisible}
        scrolled={scrolled}
        onOpenLogin={openLogin}
        onOpenRegister={openRegister}
      />
      <AuthModal isOpen={authOpen} onClose={closeAuth} defaultTab={authTab} onSwitchTab={setAuthTab} />
      <main className="pt-[88px]">
        <Hero />
        <div ref={courseSectionRef}>
          <CourseGrid searchQuery={searchQuery} />
        </div>
        <ProgramSlider />
        <Alumni />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
