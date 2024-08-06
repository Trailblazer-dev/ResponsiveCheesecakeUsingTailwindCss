/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "first-color":"#523728",
        "card-title":"#1D2729",
        "body-bg":"#FFF8E1"
      },
      backgroundImage:{
        'back':"url('/src/img/background.png')"
      }
    },
  },
  plugins: [],
}

