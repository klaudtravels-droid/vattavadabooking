/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1a3a2a',
          deep: '#0d1f14',
          light: '#2a5a3a',
        },
        amber: {
          DEFAULT: '#c8922a',
          light: '#d4a84a',
        },
        parchment: {
          DEFAULT: '#f5f0e8',
          dark: '#e8e0d4',
        },
        charcoal: '#2b2b2b',
        cream: '#f0ece3',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
