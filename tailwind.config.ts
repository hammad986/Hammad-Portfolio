import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050814",
        secondary: "#080E21",
        carbon: "#0C132C",
        carbonBorder: "rgba(0, 198, 255, 0.15)",
        bluecore: "#1E60FF",
        cyanCore: "#00F2FE",
        emeraldCore: "#00F5A0",
        amberCore: "#F59E0B",
        glow: "#00C6FF",
        titanium: "#94A3B8",
        muted: "#94A3B8",
        mutedForeground: "#CBD5E1"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "var(--font-inter)",
          "Inter",
          "Segoe UI",
          "sans-serif"
        ],
        mono: [
          "SF Mono",
          "JetBrains Mono",
          "Fira Code",
          "Menlo",
          "Courier New",
          "monospace"
        ]
      },
      boxShadow: {
        command: "0 20px 60px rgba(5, 8, 20, 0.9), 0 0 35px rgba(0, 242, 254, 0.12)",
        cyberCard: "0 25px 70px rgba(5, 8, 20, 0.8), 0 0 30px rgba(30, 96, 255, 0.15)",
        cyanGlow: "0 0 30px rgba(0, 242, 254, 0.3)",
        blueGlow: "0 0 35px rgba(30, 96, 255, 0.35)",
        emeraldGlow: "0 0 25px rgba(0, 245, 160, 0.35)"
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 5s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 1.5s infinite",
        "radar-sweep": "radar 4s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
