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
        primary_100: "#fdcb6e",
        primary_110: "#ffeaa7",
        primary_120: "#00b894",
        primary_130: "#fab1a0",
      },
    },
  },
  plugins: [],
};
export default config;
