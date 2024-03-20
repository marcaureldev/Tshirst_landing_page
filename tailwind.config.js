/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'template': "url('./src/assets/images/freetemplate.svg')",
      'style': "url('./src/assets/images/style.svg')",
      'own': "url('./src/assets/images/own.svg')",
      'cercle': "url('./src/assets/images/cercle.svg')",
      'small_cercle': "url('./src/assets/images/small_cercle.svg')",
      'circle': "url('./src/assets/images/circle.svg')",
      'cercle_enjoy': "url('./src/assets/images/cercle_enjoy.svg')",
      'small_enjoy_cercle': "url('./src/assets/images/small_enjoy_cercle.svg')",
    },
    extend: {
      colors: {
        'unregular': '#B479D9',
        'unregular1': '#B479D926',
        'primary_color': '#2EBB77',
        'secondary_color': '#F4EEFA',
        'behind_color': '#F8F8F8',
        'third_color': '#7E7E7E',
        'btn_color': '#F5F5F5',
        'enjoy': '#64CB9A',
        'harutheme':'#EEEEEE',
      },
      width:{
        '50': '50em',
      },
      maxWidth:{
        '45': '45em',
        '50': '50em',
        '70': '70em',
        '55': '55em',
      }
    },
  },
  plugins: [],
}