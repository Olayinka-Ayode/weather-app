/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kadwa: 'Kadwa'
      },
      colors: {
        skyBlue: '#A8E9E4',
        fadedBlue: 'rgba(168, 233, 228, 0.2)'
      }
    },
  },
  plugins: [],
}

