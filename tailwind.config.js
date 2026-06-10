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
          50:  '#fdf9ef',
          100: '#faf0d4',
          200: '#f4dea3',
          300: '#ecc867',
          400: '#e4b03a',
          500: '#C8972A',
          600: '#b07820',
          700: '#8a5c19',
          800: '#714a1b',
          900: '#5f3e1a',
        },
        navy: {
          50:  '#f0f4f8',
          100: '#d9e4f0',
          200: '#b3c8e1',
          300: '#7fa3cb',
          400: '#4d7daf',
          500: '#2c5f8e',
          600: '#1e4875',
          700: '#163559',
          800: '#0F1B2D',
          900: '#080f1a',
        },
        cream: {
          50:  '#FDFAF6',
          100: '#F7F3EE',
          200: '#ede5d8',
          300: '#dfd0bc',
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", 'Georgia', 'serif'],
        body:    ["'Inter'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
