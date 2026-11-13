import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        canvasBg: "#000000",
        surface: {
          DEFAULT: "rgba(11, 18, 32, 0.6)",
          elevated: "rgba(15, 23, 42, 0.75)",
          card: "rgba(10, 16, 29, 0.7)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(34, 211, 238, 0.35)",
        },
        accent: {
          cyan: "#22D3EE",
          cyanGlow: "rgba(34, 211, 238, 0.15)",
          violet: "#8B5CF6",
          violetGlow: "rgba(139, 92, 246, 0.15)",
        },
        text: {
          primary: "#E6EDF7",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(34, 211, 238, 0.25)",
        "glow-violet": "0 0 25px -5px rgba(139, 92, 246, 0.25)",
        card: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyan-flare": "radial-gradient(circle at center, rgba(34,211,238,0.12) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
