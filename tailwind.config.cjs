/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      
      'bg-color': '#006c5e',
      'black': '#0C1618',
      'orange': '#BA5C12',
      'tea': '#C3DBC5',
      'brown': '#c2c59c',
      'buff': '#98af84',
      'white': '#fdfdfd',
      'border': '#eadcb9',
      'teal': '#3c8366',
      'transparent': 'transparent',

    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      
    },
    extend: {},
  },
  plugins: [],
}
