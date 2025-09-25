/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sjBlue: "#0033A0",  // royal blue
        sjGold: "#FDB913",  // gold
        sjNavy: "#0B1736",  // deep navy
      },
    },
  },
  plugins: [],
};
