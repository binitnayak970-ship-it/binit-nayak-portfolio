import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2EDE4",
        "paper-deep": "#E7DFD2",
        ink: "#141414",
        "ink-soft": "#2A2A28",
        // Graphic accents (safe for large text and rules only).
        ember: "#C8391B",
        ochre: "#D69A2A",
        // Text-safe variants that keep WCAG AA on the paper background.
        "ember-ink": "#A82C12",
        "ochre-ink": "#7A4F06",
        graphite: "#C6BEB1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        micro: "0.28em",
        wide2: "0.16em",
      },
      maxWidth: {
        frame: "1440px",
      },
      keyframes: {
        "reveal-up": {
          from: { opacity: "0", transform: "translate3d(0, 22px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
