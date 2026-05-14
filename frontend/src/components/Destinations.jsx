import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const VATTAVADA_IMG = 'https://images.unsplash.com/photo-1619020905969-ba8d47f8c7cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHw0fHxLZXJhbGElMjBoaWxscyUyMHZhbGxleSUyMG1pc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc4Njk5NDAyfDA&ixlib=rb-4.1.0&q=85';

const COMING_SOON_DESTINATIONS = [
  { name: 'Kanthalloor', desc: 'The fruit bowl of Kerala, surrounded by orchards and cool breeze', img: 'https://images.unsplash.com/photo-1719831738921-972e0ec76337?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjB0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxsc3xlbnwwfHx8fDE3Nzg2OTk0MDJ8MA&ixlib=rb-4.1.0&q=85' },
  { name: 'Marayoor', desc: 'Sandalwood forests and ancient dolmens in the Western Ghats', img: 'https://images.unsplash.com/photo-1648722864944-d6c6500edd0a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxLZXJhbGElMjB0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxsc3xlbnwwfHx8fDE3Nzg2OTk0MDN8MA&ixlib=rb-4.1.0&q=85' },
  { name: 'Munnar', desc: 'Iconic tea gardens stretching to the horizon', img: 'https://images.unsplash.com/photo-1627370778723-4d26700cd972?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxrZXJhbGElMjB0b3VyaXNtfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85' },
  { name: 'Vagamon', desc: 'Rolling meadows and pine forests in the mist', img: 'https://images.unsplash.com/photo-1711192702535-eac61a78ecb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxLZXJhbGElMjB0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxsc3xlbnwwfHx8fDE3Nzg2OTk0MDJ8MA&ixlib=rb-4.1.0&q=85' },
  { name: 'Mankulam', desc: 'Untouched wilderness at the edge of the Western Ghats', img: 'https://images.unsplash.com/photo-1656427025335-782b2a9a4719?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxLZXJhbGElMjBoaWxscyUyMHZhbGxleSUyMG1pc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc4Njk5NDAyfDA&ixlib=rb-4.1.0&q=85' },
  { name: 'Adimali', desc: 'Gateway to the highlands with lush green landscapes', img: 'https://images.unsplash.com/photo-1671795164748-8d70c5fb7a22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxLZXJhbGElMjBoaWxscyUyMHZhbGxleSUyMG1pc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc4Njk5NDAyfDA&ixlib=rb-4.1.0&q=85' },
  { name: 'Bison Valley', desc: 'Wild bison trails through dense forest corridors', img: 'https://images.unsplash.com/photo-1766485586439-5a2550a34a2c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHx0ZWElMjBnYXJkZW4lMjBtaXN0eSUyMGhpbGxzfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85' },
  { name: 'Sooryanelli', desc: 'Where the sun kisses the mountain peaks at dawn', img: 'https://images.unsplash.com/photo-1764012393674-8da5cf8e0b3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHw0fHxLZXJhbGElMjB0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxsc3xlbnwwfHx8fDE3Nzg2OTk0MDN8MA&ixlib=rb-4.1.0&q=85' },
  { name: 'Devikulam', desc: 'Sacred lake town with panoramic valley views', img: 'https://images.unsplash.com/photo-1663597675745-96a3f784369e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxrZXJhbGElMjB0b3VyaXNtfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85' },
  { name: 'Silent Valley', desc: 'One of India\'s last undisturbed tropical forests', img: 'https://images.unsplash.com/photo-1761374985788-05b0d69689dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHx0ZWElMjBnYXJkZW4lMjBtaXN0eSUyMGhpbGxzfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85' },
  { name: 'Anachal', desc: 'Quiet village with spice plantations and waterfalls', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjB0b3VyaXNtfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85' },
];

export default function Destinations() {
  const [tab, setTab] = useState('available');
  const [animate, setAnimate] = useState(true);
  const contentRef = useRef(null);

  // Re-trigger fade-in animation on tab switch
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [tab]);

  return (
    <section
      id="destinations"
      data-testid="destinations-section"
      className="relative py-24 sm:py-32 bg-forest-deep grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-amber text-xs tracking-[0.25em] uppercase font-semibold mb-4">Destinations</p>
          <h2 className="font-display text-cream text-3xl sm:text-4xl lg:text-5xl font-semibold" data-testid="destinations-heading">
            Where We Take You
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 reveal reveal-delay-1">
          <button
            onClick={() => setTab('available')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              tab === 'available'
                ? 'bg-amber text-charcoal shadow-lg shadow-amber/20'
                : 'bg-white/10 text-cream/70 hover:bg-white/15'
            }`}
            data-testid="tab-available"
          >
            Now Available
          </button>
          <button
            onClick={() => setTab('coming')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              tab === 'coming'
                ? 'bg-amber text-charcoal shadow-lg shadow-amber/20'
                : 'bg-white/10 text-cream/70 hover:bg-white/15'
            }`}
            data-testid="tab-coming-soon"
          >
            Coming Soon
          </button>
        </div>

        {/* Tab Content with fade transition */}
        <div
          ref={contentRef}
          className="transition-all duration-500 ease-out"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Available Tab */}
          {tab === 'available' && (
            <div className="max-w-4xl mx-auto" data-testid="available-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                <div className="img-zoom">
                  <img
                    src={VATTAVADA_IMG}
                    alt="Vattavada - Kerala's highest village"
                    className="w-full h-[300px] md:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[#142e1e] p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-amber/20 text-amber px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                      Available Now
                    </span>
                  </div>
                  <h3 className="font-display text-cream text-2xl sm:text-3xl font-semibold mb-3" data-testid="vattavada-card-title">
                    Vattavada
                  </h3>
                  <div className="flex items-center gap-1.5 text-cream/60 text-sm mb-4">
                    <MapPin size={14} />
                    <span>Kerala's Highest Village &middot; 6,000+ ft</span>
                  </div>
                  <p className="font-body text-cream/70 text-sm sm:text-base leading-relaxed mb-6">
                    Perched atop the Palani Hills, Vattavada is a secret paradise of strawberry farms, 
                    rolling vegetable terraces, and mist-draped mornings. Wake up above the clouds and 
                    walk through landscapes that feel like a painting come alive.
                  </p>
                  <a
                    href="#booking"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 bg-amber text-charcoal px-6 py-3 rounded-full font-semibold text-sm hover:bg-amber-light transition-all duration-300 w-fit"
                    data-testid="vattavada-book-btn"
                  >
                    Book Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Coming Soon Tab */}
          {tab === 'coming' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" data-testid="coming-soon-content">
              {COMING_SOON_DESTINATIONS.map((dest) => (
                <div
                  key={dest.name}
                  className="coming-soon-card rounded-2xl overflow-hidden bg-[#142e1e] group"
                  data-testid={`dest-card-${dest.name.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <div className="img-zoom h-44 overflow-hidden">
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-cream text-lg font-semibold mb-1">{dest.name}</h4>
                    <p className="font-body text-cream/50 text-sm leading-relaxed">{dest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
