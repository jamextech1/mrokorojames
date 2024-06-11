import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
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
