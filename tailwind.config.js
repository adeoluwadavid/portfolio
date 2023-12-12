module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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