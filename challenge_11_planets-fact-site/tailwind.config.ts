import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#070724',
        darkGrey: '#38384f',
        lightGrey: '#838391',
        mercury: '#419ebb',
        venus: '#eda249',
        earth: '#6d2ed5',
        mars: '#d14c32',
        jupiter: '#d83a34',
        saturn: '#cd5120',
        uranus: '#1ec2a4',
        neptune: '#2d68f0',
        mercuryMenu: '#def4fc',
        marsMenu: '#ff6a45',
        venusMenu: '#f7cc7f',
        earthMenu: '#545bfe',
        jupiterMenu: '#ecad7a',
        saturnMenu: '#fccb6b',
        uranusMenu: '#65f0d5',
        neptuneMenu: '#497efa',
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        spartan: ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
