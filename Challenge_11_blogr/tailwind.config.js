/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-overpass": ["Overpass", "sans-serif"],
        "font-ubuntu": ["Ubuntu", "sans-serif"],
      },
      fontWeight: {
        "overpass-light": "300",
        "overpass-bold": "600",
        "ubuntu-regular": "400",
        "ubuntu-medium": "500",
        "ubuntu-bold": "700",
      },
      colors: {
        "primary-red": "hsl(356, 100%, 66%)",
        "primary-cta-hover": "hsl(355, 100%, 74%)",
        "color-heading": "hsl(208, 49%, 24%)",
        "color-white": "hsl(0, 0%, 100%);",
        "color-grayish-blue": "hsl(240, 2%, 79%)",
        "color-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "color-very-dark-blue": "hsl(240, 10%, 16%)",
        "bg-gradient-light-red": "hsl(13, 100%, 72%)",
        "bg-gradient-red": "hsl(353, 100%, 62%)",
        "bg-gradient-gray-blue": "hsl(237, 17%, 21%);",
        "bg-gradient-desaturated-blue": "hsl(237, 23%, 32%)",
      },
    },
  },
  plugins: [],
};
