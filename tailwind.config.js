/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#050510',
          950: '#020205',
        },
        glass: {
          surface: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          highlight: 'rgba(255, 230, 150, 0.15)',
        },
        champagne: {
          100: '#FDFCF0',
          200: '#F0E6D2',
          300: '#D4C5A5',
          400: '#B8A47A',
          500: '#9C8555',
        },
        bronze: {
          500: '#cd7f32',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'], // For HUD elements
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spin 15s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan-vertical 3s linear infinite',
        'tesseract': 'spin-tesseract 20s linear infinite',
        'tesseract-reverse': 'spin-tesseract-reverse 25s linear infinite',
        'look': 'look-around 5s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scan-vertical': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'spin-tesseract': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
        },
        'spin-tesseract-reverse': {
          '0%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
        },
        'look-around': {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '10%': { transform: 'translate(-50%, -50%)' },
          '20%': { transform: 'translate(-20%, -50%)' },
          '30%': { transform: 'translate(-20%, -50%)' },
          '40%': { transform: 'translate(-50%, -50%)' },
          '50%': { transform: 'translate(-50%, -20%)' },
          '60%': { transform: 'translate(-50%, -20%)' },
          '70%': { transform: 'translate(-50%, -50%)' },
          '80%': { transform: 'translate(-80%, -50%)' },
          '90%': { transform: 'translate(-80%, -50%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
