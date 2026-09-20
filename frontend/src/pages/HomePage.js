import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Marquee } from '../components/Marquee';
import { AboutSection } from '../components/AboutSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { RoadsideSection } from '../components/RoadsideSection';
import { WhyChoose } from '../components/WhyChoose';
import { VehicleTypes } from '../components/VehicleTypes';
import { HowItWorks } from '../components/HowItWorks';
import { CtaBanner } from '../components/CtaBanner';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Marquee />
        <AboutSection />
        <ServicesGrid />
        <RoadsideSection />
        <WhyChoose />
        <VehicleTypes />
        <HowItWorks />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
