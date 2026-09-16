import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import ProgramSlider from './components/ProgramSlider';
import Alumni from './components/Alumni';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const courseSectionRef = useRef(null);

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
    <div className="min-h-screen bg-brand-dark">
      <Navbar
        onResultClick={handleSearchResultClick}
        navVisible={navVisible}
        scrolled={scrolled}
      />
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

export default App;
