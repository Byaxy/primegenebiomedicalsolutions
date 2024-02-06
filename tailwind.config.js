// tailwind.config.js
// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#47ccc8",
        mainDarker: "#29aeaa",
        mainSemi: "rgba(71,204,200,.5)",
        secondaryColor: "#72d9d6",
        grayColor: "#EDF3F6",
        primary: "#2d3663",
        darkBlueText: "rgba(45,54,99,.75)",
        darkBlueLight: "rgba(45,54,99,.1)",
        darkerBlue: "#232a58",
        redColor: "#dc4545",
        default: "rgba(255, 255, 255, 1)",
      },
      boxShadow: {
        xl: "0 4px 25px 5px rgba(114, 217, 217, 0.28)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
