/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'custom-header': 'linear-gradient(95.17deg, rgba(32, 245, 115, 0.16) 14.04%, rgba(32, 245, 115, 0.07) 73.87%)',
        //Define custom gradient
      },
      colors: {
        'custom-green': 'rgba(32, 245, 115, 1)',  // Define the custom green color
      },
      colors: {
        'light-green': 'rgba(236, 254, 243, 1)',  // Define the reched us section green color
      },
      // adding custom google font manrope 
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],  // Add custom font
      },
    },
  },
  plugins: [],
}