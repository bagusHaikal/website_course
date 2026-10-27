import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import AudienceSection from './components/AudienceSection';
import ProgramChoiceSection from './components/ProgramChoiceSection';
import StepsTimelineSection from './components/StepsTimelineSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';

function ProgramMandiri() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection isLight={isLight} />
      <BenefitsSection />
      <AudienceSection />
      <ProgramChoiceSection />
      <StepsTimelineSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}

export default ProgramMandiri;
