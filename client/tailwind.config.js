/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 30s linear infinite',
      },

      keyframes: {
        slide: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-1500px, 0, 0)' }
        },
      },

      colors: {
        blue:'#003366',
      }
    },
  },
  plugins: [],
}

