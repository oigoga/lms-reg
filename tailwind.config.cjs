/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      
      'bg-color': '#E8DCB9',
      'black': '#0C1618',
      'orange': '#BA5C12',
      'tea': '#C3DBC5',
      'brown': '#b5592a',
      'buff': '#D19C66',
      'white': '#fdfdfd',
      'border': '#c7b198',
      'dust': '#f3bc77',
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
