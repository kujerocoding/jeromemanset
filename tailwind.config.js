/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'colorBG': '#121212',
        'colorFont': '#64a8db',
        'colorFont-400': '#498cbe',
        'colorTo': '#176099',
        'colorFrom': '#106D68',
        
        'colorFont-600': '#10446D',
        'accent': '#183D5A',
        'action': '#E6E6E6',
        'secondary': '#1F1B24',
      },
      fontFamily:{
        'reem': 'Reem Kufi, sans-serif',
        'roboto': 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}

