module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        white400: "#f8fafc",
        white500: "#e2e8f0",
        accent500: "#0075ff",
        gray300: "#9aa8bc",
        gray400: "#94a3b8",
        gray500: "#4b596c",
        gray700: "#334155",
        gray800: "#797979",
        black: "#000000",
      },
    },
    screens: {
      sm: "320px", // Small screens
      md: "375px", // Medium screens (iPhone 6/7/8)
      lg: "640px", // Large screens (iPad)
      xl: "768px", // Extra large screens (iPad Pro)
      "2xl": "1024px", // 2X large screens
    },
  },
  plugins: [],
};
