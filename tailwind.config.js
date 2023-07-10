/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/routes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('/src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/src/assets/home/background-home-desktop.jpg')",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#0B0D17",
      gray: "#D0D6F9",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Bellefair", "serif"],
      condensed: ["Barlow Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
