/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text': '#06230c',
        'primary': '#6ce5c3',
        'secondary': '#e5f6fa',
        'accent': '#23a4c7'
      },
      fontFamily:{
        'archivo': 'Archivo Black, sans-serif',
        'roboto': 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}

