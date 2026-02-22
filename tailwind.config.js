/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        light: {
          background: '#ffffff',
          text: '#1F2937',
          primary: '#F9FAFB',
          secondary: '#F3F4F6',
          button: '#E5E7EB',
        },
        dark: {
          background: '#050505', // Slightly lighter than pure black for better contrast
          text: '#F9FAFB',
          primary: '#111111',
          secondary: '#1A1A1A',
          button: '#262626',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
