import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import PortfolioSection from "@/components/ui/portfolio-section";
import AboutSection from "@/components/ui/about-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import BookingSection from "@/components/ui/booking-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
