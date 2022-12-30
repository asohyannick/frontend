/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'source-sans': ['"Source Sans Pro"'],
        'quicksand': ['"Quicksand"'],
        'atkinson':['"Atkinson Hyperlegible"']
      },
      colors: {
        'primary-blue': '#3A86FF',
        'primary-lila': '#8338EC',
        'primary-orange': '#FB5607',
        'secondary-pink': '#F84E6D',
        'secondary-yellow': '#FFBE0B',
        'neutral-white': '#FFFFFF',
        'neutral-grey': '#B7B7B7',
        'neutral-black': '#200E38',
      },
      screens: {
        'sm': '390px',
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}
