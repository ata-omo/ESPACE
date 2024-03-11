/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'customBlack': '#33332D',
        'customWhite': '#FFFFFF',

      }
    },
  },
  plugins: [],
}