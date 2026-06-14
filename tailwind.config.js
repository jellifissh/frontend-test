/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "Liberation Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(80, 200, 255, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        floatSlow: "float 11s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        scan: "scan 4.8s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.04)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(320%)" }
        }
      }
    }
  },
  plugins: []
};
