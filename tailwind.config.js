/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      'eaves': ['mrs-eaves-roman-lining', 'serif']
    },
    borderRadius: {
      '6xl': '3rem',
      '9xl': '4.5rem'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/images/hero.jpg')"
      },
      colors: {
        'beige': '#F3EFE6',
        'button-text': '#946B4D'
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
