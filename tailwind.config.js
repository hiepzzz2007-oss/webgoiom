/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "Inter", "Segoe UI", "Arial", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        ink: "#2A2421",
        muted: "#5A4E46",
      },
    },
  },
  plugins: [],
};
