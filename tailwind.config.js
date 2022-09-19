/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './assets/js/main.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#08c177',
          200: '#00b29f',
          300: '#d4eee7',
          400: '#ecfbf5',
        },

        secondary: {
          DEFAULT: '#00aeef',
          200: '#0089bc',
          300: '#e0f0f4',
        },
        dark: {
          100: '#454545',
          200: '#101f30',
          300: '#1f3043',
        },
        danger: {
          DEFAULT: '#ff704d',
          200: '#ff471a',
        },
      },
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      hand: ['Caveat', 'cursive'],
    },
    container: {
      center: true,
      padding: '1rem',

      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
