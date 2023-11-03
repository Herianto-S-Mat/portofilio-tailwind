/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ini': "url('/public/img/LOGO PRIBADI.png')",
        'footer-texture': "url('/public/img/LOGO PRIBADI.png')",
      }
    },
  },
  plugins: [],
}

