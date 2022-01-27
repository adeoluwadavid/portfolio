module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
      },
      spacing:{
        '72':'72vw',
        '90': '90vw'
      }
    },
  },
  plugins: [],
}