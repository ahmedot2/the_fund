import HeroSection from '@/components/sections/HeroSection';
import ImperativeSection from '@/components/sections/ImperativeSection';
import SolutionSection from '@/components/sections/SolutionSection';
import TriHubSection from '@/components/sections/TriHubSection';
import MandateSection from '@/components/sections/MandateSection';
import FinancialsSection from '@/components/sections/FinancialsSection';
import AllocationSection from '@/components/sections/AllocationSection';
import VisionSection from '@/components/sections/VisionSection';
import ConclusionSection from '@/components/sections/ConclusionSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden">
      <HeroSection />
      <ImperativeSection />
      <SolutionSection />
      <TriHubSection />
      <MandateSection />
      <FinancialsSection />
      <AllocationSection />
      <VisionSection />
      <ConclusionSection />
    </main>
  );
}
