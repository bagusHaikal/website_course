import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import CourseGridSection from './components/CourseGridSection';
import ProgramSliderSection from './components/ProgramSliderSection';
import AlumniSection from './components/AlumniSection';
import FAQSection from './components/FAQSection';

function HomePage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <HeroSection isLight={isLight} />
      <CourseGridSection />
      <ProgramSliderSection />
      <AlumniSection />
      <FAQSection />
    </div>
  );
}

export default HomePage;
