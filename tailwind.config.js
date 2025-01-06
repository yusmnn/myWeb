/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './js/script.js',
  ],
  darkMode: 'class',
  theme: {
    safelist: [
      'bg-green',
      'bg-danger',
      'bg-secondary',
      'bg-black',  
    ],
    
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#D2D2CF',
        danger: '#e3342f',
        green: '#38a169',
        black: '#0E161F',
        dark: '#0f172a',
        bg: '#0E161F',
        card: '#1C2834',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

