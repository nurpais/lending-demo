/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#08c177',
        secondary: {
          DEFAULT: '#00aeef',
          200: '#0089bc',
        },
        dark: {
          100: '#454545',
          200: '#101f30',
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
