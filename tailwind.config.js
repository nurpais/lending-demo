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
        },

        secondary: {
          DEFAULT: '#00aeef',
          200: '#0089bc',
        },
        dark: {
          100: '#454545',
          200: '#101f30',
          300: '#1f3043',
        },
      },
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
