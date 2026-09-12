/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#22B6AE",
          light: "#5FD1C9",
          dark: "#1A938D",
        },
        navy: {
          DEFAULT: "#153A5B",
          light: "#1F4E77",
          dark: "#0E2A42",
        },
        bg: {
          light: "#DFF3F1",
          card: "#FFFFFF",
        },
        accent: {
          orange: "#F5A623",
          red: "#E74C3C",
        },
        muted: "#6B7A83",
      },
      fontFamily: {
        sans: ["Poppins", "Segoe UI", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(21, 58, 91, 0.18)",
        nav: "0 -4px 16px -4px rgba(21, 58, 91, 0.12)",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(34,182,174,0.45)" },
          "100%": { boxShadow: "0 0 0 14px rgba(34,182,174,0)" },
        },
        popIn: {
          "0%": { opacity: 0, transform: "scale(0.92)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        floatUp: "floatUp 0.5s ease-out both",
        pulseRing: "pulseRing 1.8s ease-out infinite",
        popIn: "popIn 0.25s ease-out both",
      },
    },
  },
  plugins: [],
}