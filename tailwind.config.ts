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
      width: {
        "12px": "12px",
        "20px": "20px",
        "36px": "36px",
        "42px": "42px",
        "60px": "60px",
        "80px": "80px",
        "120px": "120px",
        "185px": "185px",
        "280px": "280px",
        "300px": "300px",
        "327px": "327px",
      },
      height: {
        "1px": "1px",
        "22px": "22px",
        "28px": "28px",
        "32px": "32px",
        "36px": "36px",
        "46px": "46px",
        "48px": "48px",
        "56px": "56px",
        "60px": "60px",
        "80px": "80px",
        "100px": "100px",
        "635px": "635px",
      },
      borderRadius: {
        xxlg: "42px",
      },
      inset: {
        "1/2": "50%",
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
        g100: "#F5F5F5",
        kakao: "#FEE500",
        google: "#F4F4F4",
        facebook: "#1877F2",
        github: "#EEE6C4",
      },
    },
  },
  plugins: [],
};
export default config;
