import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Silk from "@/components/Silk";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Silk speed={3} scale={1.5} color="#0F1F3D" noiseIntensity={1.2} rotation={0.3} />
        </div>
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <ProjectsSection />
      <AboutSection />
      <EducationSection />
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Silk speed={3} scale={1.5} color="#1a3a5c" noiseIntensity={1.5} rotation={0.5} />
        </div>
        <div className="relative z-10">
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
