/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // boxShadow: {
      //   '3xl' :'10px 10px 5px 12px lightblue'
      // }
    },
    colors:{
      'cream' : '#FFF5E4',
      'white' : '#F9F9F9',
      'grey' : '#EFEFEF',
      'red' : '#D2001A',
      'peach': '#FF6464',
      'pink' : '#ea0e4b',
    }
  },
  plugins: [],
}