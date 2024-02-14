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
        primaryBlack: '#000000',
        primaryGrey: '#7d7d7d',
        lightGrey: '#f5f5f5',
        lighterGrey: '#F3F3F3',
        primaryWhite: '#ffffff',
      },
      fontFamily: { libre: ['Libre Baskerville', 'serif'] },
    },
  },
  plugins: [],
};
export default config;
