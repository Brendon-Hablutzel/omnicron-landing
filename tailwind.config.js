/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#242424',
        'bg-medium': '#3d3d3d',
        'bg-lighter': '#454545',
        'bright-green': '#32a852',
        'dark-green': '#31573f',
        'text-light': 'rgb(209 213 219)'
      },
      fontSize: {
        // smaller than base, but bigger than sm
        'smaller': ['0.83rem', '1.3rem'],
      }
    },
  },
  plugins: [],
}

