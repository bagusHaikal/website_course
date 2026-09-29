import { useTheme } from '../contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import KelasMandiriSection from './components/KelasMandiriSection';
import ComingSoonSection from './components/ComingSoonSection';

function BelajarMandiri() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection isLight={isLight} />
      <KelasMandiriSection />
      <ComingSoonSection />
    </div>
  );
}

export default BelajarMandiri;
