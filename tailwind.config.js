/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mainColorLight: "#C32155",
        mainColorDark: "#941842",
        grayColorDark: "#242424",
        grayColorLight: "#4A4A4A",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
