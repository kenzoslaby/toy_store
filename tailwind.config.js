/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}" , "./js/app.js"],
  theme: {
    extend: {
      colors: {
        'green': '#a2c035',
        'yellow': '#494e92',
        'pink': '#992943',
        'gray': '#999999',
        'body-bg': '#F8F8F8',
        'p':'#5b5757',
        'blue':'#486060'
      },
      boxShadow: {
        'card': '0px 1px 2px 0px #00000026'
      },
      maxWidth: {
        '1200': '1200px'
      },
      backgroundImage: {
        'hero': "url('/images/hero.jpg')",
        'video': "url('/images/tidy.jpeg')",
      }
    },
  },
  plugins: [],
}

