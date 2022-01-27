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
        '90': '90vw',
        '128':'38rem',
        '64':'32rem',
        '307':'307px',
        '75':'75%'
      }
    },
  },
  plugins: [],
}