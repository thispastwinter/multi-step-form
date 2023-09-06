/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu-Regular", "Ubuntu-Medium", "Ubuntu-Bold"],
    },
    extend: {
      colors: {
        "blue-ribbon": {
          50: "#ebf1ff",
          100: "#dbe4ff",
          200: "#becdff",
          300: "#97abff",
          400: "#6e7dff",
          500: "#4c51ff",
          600: "#483eff",
          700: "#2e20e2",
          800: "#251db6",
          900: "#23208f",
          950: "#171353",
        },
        "gray-chateau": {
          50: "#f6f6f7",
          100: "#efeff0",
          200: "#e1e3e4",
          300: "#ced1d3",
          400: "#b9bcc0",
          500: "#9da0a6",
          600: "#91949a",
          700: "#7d7f85",
          800: "#66676d",
          900: "#55575a",
          950: "#323334",
        },
        "green-vogue": {
          50: "#eaf9ff",
          100: "#d0f2ff",
          200: "#abeaff",
          300: "#71e0ff",
          400: "#2fcbff",
          500: "#00a9ff",
          600: "#0080ff",
          700: "#0066ff",
          800: "#0055dd",
          900: "#004dad",
          950: "#03295a",
        },
      },
      backgroundImage: {
        "sidebar-desktop": "url('/src/assets/images/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('/src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
