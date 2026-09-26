import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import BootcampCoursesSection from './components/BootcampCoursesSection';
import BenefitsSection from './components/BenefitsSection';
import MentorSection from './components/MentorSection';
import InstallmentSection from './components/InstallmentSection';
import TestimonialsSection from './components/TestimonialsSection';

function Bootcamp() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection isLight={isLight} />
      <BootcampCoursesSection />
      <BenefitsSection />
      <MentorSection />
      <InstallmentSection />
      <TestimonialsSection />
    </div>
  );
}

export default Bootcamp;
