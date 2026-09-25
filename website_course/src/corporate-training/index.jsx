import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import SchemesSection from './components/SchemesSection';
import PartnersSection from './components/PartnersSection';
import CTASection from './components/CTASection';

function CorporateTraining() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection isLight={isLight} />
      <ProgramsSection />
      <SchemesSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}

export default CorporateTraining;
