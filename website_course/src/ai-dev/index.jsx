import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import CurriculumSection from './components/CurriculumSection';
import RequirementsSection from './components/RequirementsSection';
import MentorsSection from './components/MentorsSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';

function AIDevPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection isLight={isLight} />
      <BenefitsSection />
      <CurriculumSection />
      <RequirementsSection />
      <MentorsSection />
      <StepsSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}

export default AIDevPage;
