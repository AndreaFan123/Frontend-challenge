/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-kumbh': "Kumbh Sans"
      },
      colors: {
        'dark-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'gradient-violet': 'hsl(273, 75%, 66%)',
        'gradient-blue': 'hsl(240, 73%, 65%)',
        'text-dark-gray': 'hsl(237, 12%, 33%)',
        'text-gray': 'hsl(240, 6%, 50%)',
        'divider': 'hsl(240, 5%, 91%)'
      }
    },
  },
  plugins: [],
}

