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
    extend: {},
  },
  plugins: [],
}