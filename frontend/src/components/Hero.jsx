import React from 'react';
import { ChevronDown } from 'lucide-react';

const HERO_BG = 'https://images.unsplash.com/photo-1686376351261-7a1d6e6e2939?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBoaWxscyUyMHZhbGxleSUyMG1pc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc4Njk5NDAyfDA&ixlib=rb-4.1.0&q=85';

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0d1f14]/80" />

      {/* Mist Layers */}
      <div className="mist-layer mist-1" />
      <div className="mist-layer mist-2" />
      <div className="mist-layer mist-3" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-body text-amber text-sm sm:text-base tracking-[0.25em] uppercase mb-6 reveal reveal-delay-1">
          Kerala's Hidden Highland Retreats
        </p>
        <h1
          className="font-display text-cream text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight hero-text-shadow mb-6 reveal reveal-delay-2"
          data-testid="hero-heading"
        >
          Into the Mist,<br />
          <span className="italic font-normal">Beyond the Ordinary</span>
        </h1>
        <p className="font-body text-cream/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed reveal reveal-delay-3">
          Discover the hidden valleys of Kerala with your trusted guide. Curated stays, misty mornings, and mountain silence await you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-4">
          <a
            href="#destinations"
            onClick={(e) => { e.preventDefault(); document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-4 bg-forest text-cream font-body font-semibold text-sm tracking-wide rounded-full hover:bg-forest-light transition-all duration-300 hover:shadow-lg hover:shadow-forest/20"
            data-testid="hero-explore-btn"
          >
            Explore Destinations
          </a>
          <a
            href="https://wa.me/919778342424"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366] text-white font-body font-semibold text-sm tracking-wide rounded-full hover:bg-[#1fb855] transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-[#25D366]/20"
            data-testid="hero-whatsapp-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 reveal reveal-delay-5">
        <a
          href="https://instagram.com/klaudvalleytravels"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-amber/25 transition-all duration-300 group"
          data-testid="hero-instagram"
          aria-label="Instagram"
        >
          <Instagram size={18} className="text-cream/70 group-hover:text-amber transition-colors duration-300" />
        </a>
        <a
          href="https://facebook.com/klaudvalleytravels"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-amber/25 transition-all duration-300 group"
          data-testid="hero-facebook"
          aria-label="Facebook"
        >
          <Facebook size={18} className="text-cream/70 group-hover:text-amber transition-colors duration-300" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-cream/60" />
      </div>
    </section>
  );
}
