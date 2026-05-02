import ScrollyCanvas from "@/components/ScrollyCanvas";
import CurrentFocus from "@/components/CurrentFocus";
import ProofOfWork from "@/components/ProofOfWork";
import ProfessionalProof from "@/components/ProfessionalProof";
import Endurance from "@/components/Endurance";
import AcademicFoundation from "@/components/AcademicFoundation";
import Capabilities from "@/components/Capabilities";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="journey" className="min-h-screen bg-[#121212] selection:bg-white/20">
      <ScrollyCanvas />
      
      <div className="relative z-20 bg-[#121212]">
        <CurrentFocus />
        <ProofOfWork />
        <ProfessionalProof />
        <Endurance />
        <AcademicFoundation />
        <Capabilities />
        <Writing />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
