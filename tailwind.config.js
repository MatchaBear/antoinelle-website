/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      Quicksand: ["Quicksand", "serif"],
    },
    extend: {},
    plugins: [],
  },
  corePlugins: {
    preflight: false,
  },
};
