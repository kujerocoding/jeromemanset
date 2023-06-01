/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#10446D',
        'border': '#183D5A',
        'accent': '#183D5A',
        'bg': '#9ec5d6'
      },
      fontFamily:{
        'reem': 'Reem Kufi, sans-serif',
        'roboto': 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}

