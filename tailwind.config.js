/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'light-blue-50':'#E8F9FD',
      'light-blue-100':'#79DAE8',
      'dark-blue-50': '#0AA1DD',
      'dark-blue-100': '#2155CD',
    },
    extend: {
      fontFamily:{
        sans:['Inter','sans-serif'],
      }
    }
  },
  plugins: [],
}
