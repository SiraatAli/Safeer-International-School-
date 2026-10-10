/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Navy & gold palette (inspired by aims.net.pk)
        brand: {
          navy: "#002163",
          deep: "#001a4d",
          night: "#00122f",
          gold: "#FDC800",
          goldDark: "#E6B500",
          mist: "#F3F6FB",
          ink: "#1F2937",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0, 33, 99, 0.22)",
        lift: "0 22px 45px -15px rgba(0, 33, 99, 0.35)",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 1.8s ease-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
