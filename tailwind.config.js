/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#06070a",
        panel: "#0b0e12",
        panel2: "#0d1117",
        border: {
          DEFAULT: "#1c2128",
          soft: "#161b22",
        },
        brand: {
          green: "#39ff6a",
          greenDim: "#1f9c44",
        },
        ink: {
          DEFAULT: "#e6edf3",
          dim: "#8b96a3",
          faint: "#5b6573",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
        display: ["var(--font-space)", "Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 18px rgba(57,255,106,0.35)",
        glowLg: "0 0 28px rgba(57,255,106,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(57,255,106,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,106,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
