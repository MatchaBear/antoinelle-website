/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'Quicksand': ['Quicksand', 'serif'],
      },
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
