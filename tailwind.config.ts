import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Amostradas diretamente da logo oficial.
        magenta: "#E51A6E",
        lima: "#A5C614",
        ciano: "#00B5D3",
        tinta: "#0B0B0C",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        bloco: "6px 6px 0 0 #0B0B0C",
        "bloco-sm": "4px 4px 0 0 #0B0B0C",
      },
      keyframes: {
        subir: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulso: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        subir: "subir .7s cubic-bezier(.2,.7,.3,1) both",
        pulso: "pulso 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
