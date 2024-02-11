/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'rgba(21, 34, 89, 1)',
        secondaryColor: 'rgba(80, 156, 219, 1)',
        tertiaryColor: 'rgba(185, 215, 241, 1)',
        secondaryHoverColor: 'rgba(80, 156, 219, 0.8)',
        btnColor: '#2D88D4',
        btnHoverColor: '#509CDB',
      },
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif'],
        'karla': ['Karla', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('./src/assets/hero-bg.png')",
      },
    },
  },
  plugins: [],
}

