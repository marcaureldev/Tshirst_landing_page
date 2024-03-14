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
    },
    extend: {
      colors: {
        'unregular': '#B479D9',
        'primary_color': '#2EBB77',
        'secondary_color': '#F4EEFA',
        'behind_color': '#F8F8F8',
        'third_color': '#7E7E7E',
        'btn_color': '#F5F5F5',
      },
    },
  },
  plugins: [],
}