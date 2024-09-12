/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-header': 'linear-gradient(95.17deg, rgba(32, 245, 115, 0.16) 14.04%, rgba(32, 245, 115, 0.07) 73.87%)',
        //Define custom gradient
      },
      colors: {
        'custom-green': 'rgba(32, 245, 115, 1)',  // Define the custom color
      },
    },
  },
  plugins: [],
}