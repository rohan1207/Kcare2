/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#7BAE3A',
        'primary-maroon': '#6C0F0F',
        'accent-red': '#B03042',
        'deep-wine': '#3E0808',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        display: ['Fraunces', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
