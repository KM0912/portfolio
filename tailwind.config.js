/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        heading: ['Montserrat', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#111111',
          800: '#1A1A1A',
          700: '#2C2C2C',
          600: '#333333',
          500: '#404040',
        },
        primary: {
          50: '#E6FBFF',
          100: '#CCF7FE',
          200: '#99EFFD',
          300: '#66E7FC',
          400: '#33DFFB',
          500: '#00D7FA',
          600: '#00ACC8',
          700: '#008196',
          800: '#005664',
          900: '#002B32',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};