/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F5E6C4',
          DEFAULT: '#D4AF37', // Metallic gold
          dark: '#AA7C11',
          hover: '#C5A028',
          accent: '#8C6239'
        },
        cream: {
          light: '#FFFDF9',
          DEFAULT: '#FAF9F6', // Off-white/cream
          dark: '#F0EDE6'
        },
        charcoal: {
          DEFAULT: '#1C1C1C',
          light: '#2E2E2E'
        }
      },
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'petal-fall': 'petalFall 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        }
      }
    },
  },
  plugins: [],
}
