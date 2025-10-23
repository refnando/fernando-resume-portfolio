// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          100: '#8CB5FF',
          200: '#7AA8FF',
          300: '#649DFF',
          400: '#4B8CFF',
          500: '#4169E1', // Royal Blue principal
          600: '#3256C2',
          700: '#2848A0',
        },
      },
    },
  },
  plugins: [],
};