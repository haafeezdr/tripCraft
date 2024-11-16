/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          primary: "#00174B",
          secondary: {
            DEFAULT: "#FF9C01",
            100: "#FF9001",
            200: "#FF8E01",
          },
          text: "#1B1E28",
          black: {
            DEFAULT: "#000",
            100: "#1E1E2D",
            200: "#232533",
          },
          gray: {
            100: "#CDCDE0",
          },
        },
        // fontFamily: {
        //   pthin: ["Poppins-Thin", "sans-serif"],
        //   pextralight: ["Poppins-ExtraLight", "sans-serif"],
        //   plight: ["Poppins-Light", "sans-serif"],
        //   pregular: ["Poppins-Regular", "sans-serif"],
        //   pmedium: ["Poppins-Medium", "sans-serif"],
        //   psemibold: ["Poppins-SemiBold", "sans-serif"],
        //   pbold: ["Poppins-Bold", "sans-serif"],
        //   pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        //   pblack: ["Poppins-Black", "sans-serif"],
        // },
      },
    },
  plugins: [],
}

