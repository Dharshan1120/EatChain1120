module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // blue-600
        secondary: "#facc15", // yellow-400
        accent: "#10b981" // green-500
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};
