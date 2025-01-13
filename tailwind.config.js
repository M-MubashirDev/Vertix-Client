export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B4D61", // Muted dark blue
          DEFAULT: "#263E4D", // Primary dark blue
          dark: "#1A2834", // Deep navy blue
        },
        neutral: {
          light: "#D9D9D9", // Soft light gray
          DEFAULT: "#8D8D8D", // Neutral medium gray
          dark: "#4D4D4D", // Dark neutral gray
        },
        accent: {
          light: "#6F6F6F", // Light accent gray
          DEFAULT: "#2C2C2C", // Accent black
          dark: "#000000", // Pure black
        },
        white: "#FFFFFF", // Pure white
        background: "#F5F5F5", // Light background for contrast
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
