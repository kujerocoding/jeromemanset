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
        'bg': '#121212',
        'colorTo': '#176099',
        'colorFrom': '#106D68',
        'action': '#E6E6E6',
        'secondary': '#1F1B24'
      },
      fontFamily:{
        'reem': 'Reem Kufi, sans-serif',
        'roboto': 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}

