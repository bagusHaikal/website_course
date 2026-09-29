import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import SyllabusSection from './components/SyllabusSection';
import MentorSection from './components/MentorSection';
import PricingSection from './components/PricingSection';
import TimelineSection from './components/TimelineSection';
import AudienceSection from './components/AudienceSection';
import FAQSection from './components/FAQSection';

function Workshop() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection isLight={isLight} />
      <WhySection />
      <SyllabusSection />
      <MentorSection />
      <PricingSection />
      <TimelineSection />
      <AudienceSection />
      <FAQSection />
    </div>
  );
}

export default Workshop;
