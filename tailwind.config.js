/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*'],
  theme: {
    colors: {
      border: '#E9E9E9',
      red: '#F53E32',
      white: '#ffffff',
      para: '#7A7A7A',
    },
    screens: {
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
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['"Poppins"'],
      'serif': ['"Open Sans"'],
    },
    extend: {},
  },
  plugins: [],
}

