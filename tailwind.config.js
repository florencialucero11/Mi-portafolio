/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // ajusta según tu estructura
  ],
  darkMode: "class", // para toggle dark mode con class "dark"
  theme: {
    extend: {
      colors: {
        primary: "#00e5d4",       // Turquesa neón
        primaryLight: "#66fff0",  // Turquesa claro
        bgDarker: "#121217",
        bgLight: "#1e1e2f",
        text: "#e0e0e0",
        textLight: "#b0b0c0",
      },
      boxShadow: {
        glow: "0 0 10px rgba(0, 229, 212, 0.3)",
        "glow-hover": "0 0 20px rgba(0, 229, 212, 0.6)",
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
