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
        btnColor: '#2D88D4',
        btnHoverColor: '#509CDB',
      },
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

