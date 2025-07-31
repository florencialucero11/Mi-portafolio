/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Colores dark (los que ya tenías)
        primary: "#00e5d4",       // Turquesa neón
        primaryLight: "#66fff0",  // Turquesa claro
        bgDarker: "#121217",
        bgLight: "#1e1e2f",
        text: "#e0e0e0",
        textLight: "#b0b0c0",
        
        // NUEVOS colores claro
        bgLightest: "#f9fafb",     // Fondo base claro
        bgLighter: "#ffffff",      // Fondo más claro (secciones o cards)
        textDark: "#1f2937",       // Gris muy oscuro (casi negro) para texto
        textSoft: "#374151",       // Gris medio para subtítulos
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
