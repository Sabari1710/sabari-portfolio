/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        space: {
          950: '#020617',
          900: '#07091a',
          800: '#0f172a',
          700: '#1e293b'
        }
      }
    }
  },
  plugins: []
}
