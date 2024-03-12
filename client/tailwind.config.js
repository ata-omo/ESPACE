/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        'customBlack': '#33332D',
        'customWhite': '#FFFFFF',

      }
    },
  },
  plugins: [],
}