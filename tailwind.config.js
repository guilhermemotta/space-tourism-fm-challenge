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
        "destination-mobile":
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/src/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/src/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/src/assets/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('/src/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/src/assets/technology/background-technology-desktop.jpg')",
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
