import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "#523B6D",
      white: "#FFFFFF",
      black: "#020202",
      link: "#0000FF",
      none: "transparent",
    },
    fontFamily: {
      optionyx: ["optionyx", "Garamond", "serif"],
      myriadpro: ["myriadpro", "Tahoma", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      bold: "700",
    },
    fontSize: {
      paragraph: [
        "1rem",
        {
          lineHeight: "130%",
        },
      ],
      subheading: [
        "1rem",
        {
          lineHeight: "130%",
        },
      ],
      heading: [
        "4rem",
        {
          lineHeight: "105%",
          letterSpacing: "0.063rem",
        },
      ],
    },
    screens: {
      phone: "425px",
      tablet: "900px",
      desktop: "1280px",
    },
    dropShadow: {
      default: "0 4px 4px rgba(0, 0, 0, 0.15)",
      none: "none",
    },
    extend: {
      margin: {
        15: "60px",
        25: "100px",
      },
      padding: {
        15: "60px",
        25: "100px",
      },
    },
  },
  plugins: [],
};

export default config;
