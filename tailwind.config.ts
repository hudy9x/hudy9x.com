import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 4s ease-in-out forwards",
        "fade-in-500": "fade-in 0.5s ease-in-out forwards",
        "fade-in-700": "fade-in 0.7s ease-in-out forwards",
        "fade-in-1000": "fade-in 1s ease-in-out forwards",
        "fade-in-1500": "fade-in 1.5s ease-in-out forwards",
        "fade-in-2000": "fade-in 2s ease-in-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        "title": "title ease-in-out forwards",
      },
      keyframes: {
        "title": {
          "0%": {
            opacity: "0%",
            color: "transparent",

          },
          "50%": {
            opacity: "0%",
            color: "#20e1a3",
          },
          "65%": {
            opacity: "30%",
            color: "#5AEABB",
          },
          "70%": {
            opacity: "55%",
            color: "#93F9D7",

          },
          "85%": {
            opacity: "85%",
            color: "#DCFFF3",

          },
          "100%": {
            opacity: "100%",
            color: "white",
          },

        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
