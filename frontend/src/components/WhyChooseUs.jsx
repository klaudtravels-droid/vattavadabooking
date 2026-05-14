import React from 'react';
import { TreePine, Users, MessageCircle, ShieldCheck } from 'lucide-react';

const REASONS = [
  {
    icon: TreePine,
    title: 'Local Expertise',
    desc: 'Born and raised in the valleys we explore. Every trail, every viewpoint — we know them like home.',
  },
  {
    icon: Users,
    title: 'Personalised Service',
    desc: 'Every trip crafted just for you. No cookie-cutter packages — only experiences that match your soul.',
  },
  {
    icon: MessageCircle,
    title: 'Instant WhatsApp Support',
    desc: "We're always just a message away. Quick responses, real people, no bots — just honest help.",
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Safe',
    desc: 'Your safety is our priority. Vetted properties, experienced guides, and a team that truly cares.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      data-testid="why-choose-us-section"
      className="relative py-24 sm:py-32 bg-parchment grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-amber text-xs tracking-[0.25em] uppercase font-semibold mb-4">Why Us</p>
          <h2 className="font-display text-forest text-3xl sm:text-4xl lg:text-5xl font-semibold" data-testid="why-choose-heading">
            Why Klaud Valley?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`reveal reveal-delay-${idx + 1} text-center p-8 rounded-2xl bg-white shadow-[0_4px_24px_rgba(26,58,42,0.05)] hover:shadow-[0_8px_32px_rgba(26,58,42,0.1)] transition-all duration-500 group`}
                data-testid={`why-card-${idx}`}
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-forest/8 flex items-center justify-center mb-5 group-hover:bg-amber/15 transition-colors duration-300">
                  <Icon size={24} className="text-forest group-hover:text-amber transition-colors duration-300" />
                </div>
                <h3 className="font-display text-forest text-lg font-semibold mb-3">{r.title}</h3>
                <p className="font-body text-charcoal/65 text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
