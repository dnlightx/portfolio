/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          text: '#1F2937',
          primary: '#F9FAFB',
          secondary: '#F3F4F6',
          button: '#E5E7EB', // Darker button for light mode
        },
        dark: {
          background: '#000000',
          text: '#F9FAFB',
          primary: '#111111',
          secondary: '#222222',
        },
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
