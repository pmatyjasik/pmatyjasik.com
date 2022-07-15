/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#355FE5',
        secondary:'#292D41',
      },
      screens: {
        'm-18': '1800px',
        'm-20': '2000px',
      },
    },
  },
  plugins: [],
}
