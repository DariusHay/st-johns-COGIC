/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // St. John COGIC palette (from logo)
        sjMaroon: "#7A1E1E",   // primary
        sjBurgundy: "#5B1515", // darker shade for gradients/headers
        sjGold: "#FDB913",     // gold ribbon from logo
        sjGoldDeep: "#C8920D", // darker gold for hover/accents
        sjCream: "#FFF7E6",    // soft background / panels
        sjInk: "#0D0E10",      // deep text
      },
    },
  },
  plugins: [],
};
