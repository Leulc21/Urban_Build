import About from "@/components/About";
import ContactPage from "@/components/Contact";
import Hero from "@/components/Hero";

import Mycarsouel from "@/components/Mycarsouel";

import Features from "@/components/features-12";
import { Footerdemo } from "@/components/footer-section";
import NavHeader from "@/components/nav-header";
import Testimonials from "@/components/testimonials";

const Home = () => {
  return (
    <div>
      <NavHeader />

      <Hero />
      <Mycarsouel />
      <About />
      <Features />

      <Testimonials />

      <ContactPage />

      <Footerdemo />
    </div>
  );
};

export default Home;
