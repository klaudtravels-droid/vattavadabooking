import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Stays', href: '#stays' },
  { label: 'Book Now', href: '#booking' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Footer() {
  const handleClick = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      data-testid="footer-section"
      className="bg-[#0a1a10] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-cream text-2xl font-semibold mb-3">
              Klaud Valley <span className="text-amber italic font-normal">Travels</span>
            </h3>
            <p className="font-body text-cream/40 text-sm leading-relaxed mb-6 max-w-xs">
              Into the Mist, Beyond the Ordinary. Your gateway to Kerala's most enchanting highland destinations.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-amber/20 transition-colors duration-300"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-cream/60 hover:text-amber" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-amber/20 transition-colors duration-300"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-cream/60 hover:text-amber" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-cream text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleClick(link.href)}
                    className="font-body text-cream/50 text-sm hover:text-amber transition-colors duration-300"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-cream text-lg font-semibold mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-amber mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/919778342424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-cream/60 text-sm hover:text-amber transition-colors"
                  data-testid="footer-phone"
                >
                  +91 97783 42424
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-amber mt-0.5 shrink-0" />
                <span className="font-body text-cream/60 text-sm">hello@klaudvalley.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber mt-0.5 shrink-0" />
                <span className="font-body text-cream/60 text-sm">Vattavada, Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <p className="text-center font-body text-cream/30 text-xs tracking-wide">
          &copy; 2025 Klaud Valley Travels. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
