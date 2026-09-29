import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import CollaborationTypesSection from './components/CollaborationTypesSection';
import CollaborationFormsSection from './components/CollaborationFormsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import CTASection from './components/CTASection';

function Partnership() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection isLight={isLight} />
      <CollaborationTypesSection />
      <CollaborationFormsSection />
      <CaseStudiesSection />
      <CTASection isLight={isLight} />
    </div>
  );
}

export default Partnership;
