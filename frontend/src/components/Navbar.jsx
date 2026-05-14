import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Stays', href: '#stays' },
  { label: 'Book Now', href: '#booking' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className={`nav-logo font-display text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-forest' : 'text-cream'
          }`}
          data-testid="nav-logo"
        >
          Klaud Valley <span className="text-amber font-normal italic">Travels</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber ${
                scrolled ? 'text-charcoal' : 'text-cream/90'
              }`}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919778342424"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#1fb855] transition-colors"
            data-testid="nav-whatsapp-btn"
          >
            <Phone size={16} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={24} className={scrolled ? 'text-charcoal' : 'text-cream'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-charcoal' : 'text-cream'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-parchment/95 backdrop-blur-xl border-b border-forest/10 shadow-lg"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-charcoal font-medium text-lg py-2 border-b border-forest/5 hover:text-amber transition-colors"
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919778342424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full font-semibold mt-2"
              data-testid="mobile-whatsapp-btn"
            >
              <Phone size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
