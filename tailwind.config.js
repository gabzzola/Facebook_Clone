/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'gray-main': '#465A69',
        'blue-main': '#1877F2',
      },
      spacing: {
        '290px': '290px',
        '980px': '980px'
      }
    },
  },
  plugins: [],
}