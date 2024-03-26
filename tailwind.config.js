// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        headerColor:"#1A1E21",
        bgColor: "#00e4bb",
        productBg:"#1D1D1D",
        softwareBtn:"#D39046",
        softwareBtnHover:"#E5923E"
      },
    },
  },
  plugins: [],
};
