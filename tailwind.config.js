/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        colors:{
          customBlue: '#1597E4',
          customGray: '#212427',
          lightGray: '#7A7A7A',
        }
      },
    },
    plugins: [],
  }