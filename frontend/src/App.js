import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Stays from './components/Stays';
import EnquiryForm from './components/EnquiryForm';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
    };

    observeAll();

    // Re-observe when DOM changes (e.g. tab switches)
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div data-testid="app-root" className="min-h-screen bg-parchment">
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Stays />
      <EnquiryForm />
      <WhyChooseUs />
      <Gallery />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
