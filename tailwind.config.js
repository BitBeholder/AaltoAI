/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Here you can extend tailwind's default configurations, if needed
    },
  },
  variants: {
    // You can specify variants (like 'hover', 'focus', etc.)
  },
  plugins: [],
}