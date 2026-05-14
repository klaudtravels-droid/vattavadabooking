import React from 'react';
import { Waves, Wallet, Star, Tent, BedDouble, CircleDot, Triangle } from 'lucide-react';

const STAYS = [
  {
    type: 'Pool Property',
    desc: 'Relax with a private pool amid the hills. Wake up to misty mountain views from your own infinity edge.',
    icon: Waves,
    img: 'https://images.unsplash.com/photo-1636484807510-bc2ffbaf3241?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBmb3Jlc3QlMjBwb29sfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85',
  },
  {
    type: 'Budget Property',
    desc: 'Comfortable stays, easy on the wallet. Clean, cozy rooms with all the essentials and warm hospitality.',
    icon: Wallet,
    img: 'https://images.unsplash.com/photo-1686931346464-5cf66d798b47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxnbGFtcGluZyUyMHRlbnQlMjBmb3Jlc3R8ZW58MHx8fHwxNzc4Njk5Mjc5fDA&ixlib=rb-4.1.0&q=85',
  },
  {
    type: 'Premium Property',
    desc: 'Luxury redefined in the lap of nature. Handpicked villas with stunning interiors and panoramic views.',
    icon: Star,
    img: 'https://images.unsplash.com/photo-1684858474017-1aaaf5212fc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjByZXNvcnQlMjBmb3Jlc3QlMjBwb29sfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85',
  },
  {
    type: 'Tents',
    desc: 'Camp under the stars in the valley. Fall asleep to cricket songs and wake up surrounded by mist.',
    icon: Tent,
    img: 'https://images.unsplash.com/photo-1698918160256-47c26c98ff17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBmb3Jlc3R8ZW58MHx8fHwxNzc4Njk5Mjc5fDA&ixlib=rb-4.1.0&q=85',
  },
  {
    type: 'Dormitory',
    desc: 'Perfect for groups and backpackers. Social, affordable, and right in the heart of the action.',
    icon: BedDouble,
    img: 'https://images.unsplash.com/photo-1709805619372-40de3f158e83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w8NjAzMzJ8MHwxfHNlYXJjaHwxfHxkb3JtaXRvcnklMjBiZWRzJTIwdHJhdmVsfGVufDB8fHx8MTc3ODY5OTI4MHww&ixlib=rb-4.1.0&q=85',
  },
  {
    type: 'Dome Stay',
    desc: 'A futuristic escape wrapped in nature. Transparent domes with panoramic views of the misty hills.',
    icon: CircleDot,
    img: 'https://images.unsplash.com/photo-1641569618527-68e26db76db0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxnZW9kZXNpYyUyMGRvbWUlMjBzdGF5JTIwbmF0dXJlJTIwZ2xhbXBpbmd8ZW58MHx8fHwxNzc4NzgxMTczfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    type: 'A-Frame Cabin',
    desc: 'Cozy alpine-style cabins nestled in the forest. Rustic charm meets modern comfort in the highlands.',
    icon: Triangle,
    img: 'https://images.unsplash.com/photo-1570793005386-840846445fed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxBLWZyYW1lJTIwY2FiaW4lMjBmb3Jlc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc4NzgxMTczfDA&ixlib=rb-4.1.0&q=85',
  },
];

export default function Stays() {
  return (
    <section
      id="stays"
      data-testid="stays-section"
      className="relative py-24 sm:py-32 bg-parchment grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-amber text-xs tracking-[0.25em] uppercase font-semibold mb-4">Accommodation</p>
          <h2 className="font-display text-forest text-3xl sm:text-4xl lg:text-5xl font-semibold" data-testid="stays-heading">
            Choose Your Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {STAYS.map((stay, idx) => {
            const Icon = stay.icon;
            return (
              <a
                key={stay.type}
                href="#booking"
                onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`group reveal reveal-delay-${(idx % 5) + 1} rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(26,58,42,0.06)] hover:shadow-[0_8px_40px_rgba(26,58,42,0.12)] transition-all duration-500 cursor-pointer`}
                data-testid={`stay-card-${stay.type.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="img-zoom h-48 overflow-hidden relative">
                  <img
                    src={stay.img}
                    alt={stay.type}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-forest/8 flex items-center justify-center group-hover:bg-amber/15 transition-colors duration-300">
                      <Icon size={18} className="text-forest group-hover:text-amber transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-forest text-lg font-semibold">{stay.type}</h3>
                  </div>
                  <p className="font-body text-charcoal/65 text-sm leading-relaxed">{stay.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
