/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['jersey25', 'sans-serif'],
        robotomono: ['robotomono', 'sans-serif'],
      },
       colors: {
        red200: "#DB2E26",
        black: "#000000",
        dirtyWhite: "#d9d9d9",
        white200: "#f2f2f2",
        white500: "#f5f5f5",
        white: "#ffffff",
        grey: "#abb2bf",
      },
    },
  },
  plugins: [],
}