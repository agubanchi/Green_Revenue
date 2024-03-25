/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        deepGreen: "#09CE74",
        darkGreen: "#0AA557",
        deepGray: "#2C3330",
      },

      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1240px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
