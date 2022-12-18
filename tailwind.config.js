/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      'span': ['"Source Serif Pro"', 'serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/images/hero.jpg')"
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
