/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         screens: {
            xs: "480px",
            // => @media (min-width: 480px) { ... }
         },

         fontFamily: {
            outfit: ["Outfit", "sans-serif"],
         },

         colors: {
            primary: "#262A2C",
            secondary: "#4A2C2A",
            brown: "#CC9966",
            // "icon-bg": rgba(255, 255, 255, 0.09),
         },

         backgroundImage: {
            dashboard: "url('assets/Dashboard-bg.png')",
         },
      },
   },
   plugins: [],
};
