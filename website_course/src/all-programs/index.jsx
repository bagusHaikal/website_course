import HeroSection from './components/HeroSection';
import AllProgramsSection from './components/AllProgramsSection';

function AllPrograms() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <HeroSection />
      <AllProgramsSection />
    </div>
  );
}

export default AllPrograms;
