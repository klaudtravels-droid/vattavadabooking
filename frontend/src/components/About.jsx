import React from 'react';
import { MapPin, Compass, Heart } from 'lucide-react';

const ABOUT_IMG = 'https://images.unsplash.com/photo-1619947603049-1cc0708f336e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBzY2VuZXJ5JTIwbWlzdCUyMGZvcmVzdHxlbnwwfHx8fDE3Nzg2OTkzMDB8MA&ixlib=rb-4.1.0&q=85';

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 sm:py-32 bg-parchment grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal img-zoom rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(26,58,42,0.12)]">
            <img
              src={ABOUT_IMG}
              alt="Misty forest path in Kerala highlands"
              className="w-full h-[400px] lg:h-[520px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2">
            <p className="text-amber text-xs tracking-[0.25em] uppercase font-semibold mb-4">Our Story</p>
            <h2 className="font-display text-forest text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6" data-testid="about-heading">
              Born in the Valleys,<br />
              <span className="italic font-normal">Rooted in the Mist</span>
            </h2>
            <p className="font-body text-charcoal/80 text-base sm:text-lg leading-relaxed mb-6">
              Klaud Valley Travels is a boutique travel service born in Vattavada — Kerala's highest inhabited village, 
              perched at over 6,000 feet above sea level. We're not just guides; we're locals who grew up breathing 
              the mist, walking the tea gardens, and knowing every hidden trail by heart.
            </p>
            <p className="font-body text-charcoal/80 text-base sm:text-lg leading-relaxed mb-8">
              Every journey we craft is personal. From handpicked homestays to secret viewpoints that only locals know, 
              we believe travel should be felt, not just seen. Whether you seek the silence of dawn over the valley 
              or the warmth of a campfire under the stars — we make it happen.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                  <MapPin size={18} className="text-forest" />
                </div>
                <span className="font-body text-sm font-medium text-charcoal">Based in Vattavada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                  <Compass size={18} className="text-forest" />
                </div>
                <span className="font-body text-sm font-medium text-charcoal">Local Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                  <Heart size={18} className="text-forest" />
                </div>
                <span className="font-body text-sm font-medium text-charcoal">Personalised Trips</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
