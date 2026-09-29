import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import AlumniGridSection from './components/AlumniGridSection';
import CollaborationOptionsSection from './components/CollaborationOptionsSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessTimelineSection from './components/ProcessTimelineSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

function HireOurGraduates() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection isLight={isLight} />
      <AlumniGridSection />
      <CollaborationOptionsSection />
      <BenefitsSection />
      <ProcessTimelineSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection isLight={isLight} />
    </div>
  );
}

export default HireOurGraduates;
