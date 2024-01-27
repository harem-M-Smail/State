/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mycolor:"#FFC300",
        red:"#FF0000"
      }
    },
  },
  plugins: [],
}

