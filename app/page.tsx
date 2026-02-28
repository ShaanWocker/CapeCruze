import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CalendlyEmbed />
      <ContactForm />
      <Footer />
    </main>
  );
}
