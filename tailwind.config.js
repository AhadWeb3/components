/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: {
          DEFAULT: "#FFFFFF",
          light: "#181818",
        },
        accent: {
          DEFAULT: "#A8FF35",
          medium: "#87D322",
          dark: "8CC83A",
        },
        grey: "#8B8B8B",
      },
    },
  },
  plugins: [],
};
