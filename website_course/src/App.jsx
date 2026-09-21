import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import ProgramSlider from './components/ProgramSlider';
import Alumni from './components/Alumni';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const courseSectionRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentY > 100) {
        if (currentY > lastScrollY.current) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }
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
    setTimeout(() => {
      courseSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <Navbar
        onResultClick={handleSearchResultClick}
        navVisible={navVisible}
        scrolled={scrolled}
      />
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-[200] w-12 h-12 rounded-full glass-panel flex items-center justify-center text-text-primary hover:border-border-hover transition-colors"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
