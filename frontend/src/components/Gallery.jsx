import React from 'react';

const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjB0b3VyaXNtfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85',
    alt: 'Kerala backwaters at sunset',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1761374985788-05b0d69689dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHx0ZWElMjBnYXJkZW4lMjBtaXN0eSUyMGhpbGxzfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85',
    alt: 'Misty tea garden hills',
    span: 'col-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1713627151330-a79a89005d5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxuYXR1cmUlMjBzY2VuZXJ5JTIwbWlzdCUyMGZvcmVzdHxlbnwwfHx8fDE3Nzg2OTkzMDB8MA&ixlib=rb-4.1.0&q=85',
    alt: 'Mountain forest scenery',
    span: 'col-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1658334490881-d22570db0250?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxuYXR1cmUlMjBzY2VuZXJ5JTIwbWlzdCUyMGZvcmVzdHxlbnwwfHx8fDE3Nzg2OTkzMDB8MA&ixlib=rb-4.1.0&q=85',
    alt: 'Nature scenery with mist',
    span: 'col-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxrZXJhbGElMjB0b3VyaXNtfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85',
    alt: 'Kerala tourism landscape',
    span: 'col-span-1 md:col-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1619020905969-ba8d47f8c7cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHw0fHxLZXJhbGElMjBoaWxscyUyMHZhbGxleSUyMG1pc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc4Njk5NDAyfDA&ixlib=rb-4.1.0&q=85',
    alt: 'Green valleys of Kerala',
    span: 'col-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1766485586335-b3ecea463aa6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx0ZWElMjBnYXJkZW4lMjBtaXN0eSUyMGhpbGxzfGVufDB8fHx8MTc3ODY5OTMwMHww&ixlib=rb-4.1.0&q=85',
    alt: 'Tea gardens in the mist',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1656427025335-782b2a9a4719?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxLZXJhbGElMjBoaWxscyUyMHZhbGxleSUyMG1pc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc4Njk5NDAyfDA&ixlib=rb-4.1.0&q=85',
    alt: 'Mountain view in Kerala',
    span: 'col-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1671795164748-8d70c5fb7a22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxLZXJhbGElMjBoaWxscyUyMHZhbGxleSUyMG1pc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc4Njk5NDAyfDA&ixlib=rb-4.1.0&q=85',
    alt: 'Sun through mountain clouds',
    span: 'col-span-1',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 sm:py-32 bg-forest-deep grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-amber text-xs tracking-[0.25em] uppercase font-semibold mb-4">Gallery</p>
          <h2 className="font-display text-cream text-3xl sm:text-4xl lg:text-5xl font-semibold" data-testid="gallery-heading">
            Glimpses of Paradise
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${(idx % 5) + 1} img-zoom rounded-xl overflow-hidden ${img.span}`}
              data-testid={`gallery-img-${idx}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
