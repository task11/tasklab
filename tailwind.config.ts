import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        caption: [
          "10px",
          {
            lineHeight: "18px",
          },
        ],
        xs: [
          "12px",
          {
            lineHeight: "18px",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "18px",
          },
        ],
        md: [
          "16px",
          {
            lineHeight: "22px",
          },
        ],
        lg: [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
      },
      colors: {
        primary_100: "#12B886",
        primary_100_disabled: "#12B88680",
        primary_110: "#FF3951",
        primary_110_disabled: "#FF395180",
        secondary_100: "#0C9169",
        black: "#000000",
        white: "#FFFFFF",
        g500: "#8E8E8E",
        g400: "#BCBCBC",
        g300: "#E4E4E4",
        g200: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
export default config;
