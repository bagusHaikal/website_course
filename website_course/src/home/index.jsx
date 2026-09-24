import { useEffect, useRef, useState } from 'react';
import Navbar from '../shared/Navbar';
import AuthModal from '../shared/AuthModal';
import Footer from '../shared/Footer';
import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import CourseGridSection from './components/CourseGridSection';
import ProgramSliderSection from './components/ProgramSliderSection';
import AlumniSection from './components/AlumniSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('login');
  const [modalMountKey, setModalMountKey] = useState(0);
  const lastScrollY = useRef(0);
  const courseSectionRef = useRef(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const openAuthModal = (tab = 'login') => {
    setModalTab(tab);
    setModalMountKey(k => k + 1);
    setModalOpen(true);
  };

  const closeAuthModal = () => setModalOpen(false);

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

  const handleSearchResultClick = (course) => {
    setSearchQuery(course.title);
    setTimeout(() => courseSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <Navbar
        onResultClick={handleSearchResultClick}
        navVisible={navVisible}
        scrolled={scrolled}
        onLoginClick={() => openAuthModal('login')}
        onRegisterClick={() => openAuthModal('register')}
      />
      <main className="pt-22">
        <HeroSection isLight={isLight} />
        <div ref={courseSectionRef}>
          <CourseGridSection searchQuery={searchQuery} />
        </div>
        <ProgramSliderSection />
        <AlumniSection />
        <FAQSection />
        <CTASection />
      </main>
      <AuthModal
        isOpen={modalOpen}
        onClose={closeAuthModal}
        defaultTab={modalTab}
        onSwitchTab={setModalTab}
        mountKey={modalMountKey}
      />
      <Footer />
    </div>
  );
}


export default HomePage;
