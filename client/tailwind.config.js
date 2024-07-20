/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '780px',
        'md': '900px',
        'lg': '960px',
        'xl': '1100px'
      },
      fontFamily: {
        'Roboto' : ["Roboto", 'sans-serif'],
        'Raleway' : ["Raleway", 'sans-serif']
      },
      colors: {
        "froker-orange": "#f76f32",
        "froker-gray": "#666666",
      }
    },
  },
  plugins: [

  ],
}