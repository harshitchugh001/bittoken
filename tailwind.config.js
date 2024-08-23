/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00e0ff',  // Custom neon blue
        black: '#000000',
        blue: {
          900: '#000080', // Dark blue background for cards and buttons
        }
      },
    },
  },
  plugins: [],
}