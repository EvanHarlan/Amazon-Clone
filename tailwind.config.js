/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#EAEDED",
          lightblue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921"
          
          
        }
      }
    },
  },
  plugins: [],
}