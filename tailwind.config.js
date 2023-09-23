/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin'); 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xs': '0 5px 8px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'royal-voilet-10': '#271427',
        'royal-voilet-20': '#5B2C5C',
        
      },
      screens: {
        'xs': '540px',
        '3xl': '1700px',
      },
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addVariant }) {
        addVariant('current', '&.active');
    }),
  ],
}

