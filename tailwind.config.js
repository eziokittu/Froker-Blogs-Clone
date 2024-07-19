/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '900px',
        'lg': '960px',
        'xl': '1100px'
      },
      fontFamily: {
        'RubikDoodleShadow': ['Rubik Doodle Shadow', 'sans-serif'],
        'Kolnia': ['Kalnia', 'serif'],
        'Merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        "froker-orange": "#f16332",
        "froker-gray": "#666666",
      }
    },
  },
  plugins: [
    
  ],
}