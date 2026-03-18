export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#D96E4C',
        'brand-red': '#A63C3C',
        'brand-beige': '#F2E8DF',
        'brand-dark': '#2B2B2B',
        'brand-gold': '#D4AF37',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
