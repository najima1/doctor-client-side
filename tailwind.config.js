/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: "1rem",
      center: true
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1280px'
    }
  },
  plugins: [require("daisyui")],
}