import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#A29875",
        primarysec: "#787054",
        dark: "#938965",
        blacksec: "#0000009E",
        darkfooter: "#504933",
        whitesoft: "#FFFFFF99",
      },
    },
  },
  plugins: [],
};
export default config;
