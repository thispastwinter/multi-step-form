/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-desktop": "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
