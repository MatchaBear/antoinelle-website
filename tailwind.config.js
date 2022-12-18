/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      'sspro': ['"Source Serif Pro"', 'serif'],

    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/images/hero.jpg')"
      }
    },
    plugins: [],
  },
  corePlugins: {
    preflight: false,
  },
};
