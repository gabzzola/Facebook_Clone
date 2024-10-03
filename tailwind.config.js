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
    },
  },
  plugins: [],
}