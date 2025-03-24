/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gentle-green': '#8AB83D',
        'gentle-teal': '#006B77',
        'gentle-orange': '#FFA500',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], // Update this if you want to match their exact font
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '7xl': '1400px', // Matches the max width from the website
      },
      aspectRatio: {
        'square': '1 / 1',
      }
    },
  },
  plugins: [],
}