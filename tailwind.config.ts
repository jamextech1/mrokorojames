import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "680": "680px",
      "576": "576px",
      "480": "480px",
      "376": "376px",
      "340": "340px",
      "320": "320px",
    },
    extend: {
      colors: {
        primary: {
          100: "#74c0fc",
          200: "#4dabf7",
        },
        light: {
          100: "#ffffff",
          200: "#CCD6F6",
          300: "#8892B0",
        },
        dark: {
          100: "#112240",
          200: "#0A192F",
          300: "#111827",
          400: "#071428",
        },
        bgDark: "#0A192F",
      },
      fontFamily: {
        Calibre: ["Calibre", "sans-serif"],
        SF_Mono: ["SF Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
