import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": {
          "DEFAULT": "#0b0a07",
          "100": "#020202",
          "200": "#050503",
          "300": "#070705",
          "400": "#0a0906",
          "500": "#0b0a07",
          "600": "#48422e",
          "700": "#847854",
          "800": "#b3a888",
          "900": "#d9d3c3"
        },
        "gray": {
          "DEFAULT": "#6e7271",
          "100": "#161717",
          "200": "#2c2e2d",
          "300": "#424544",
          "400": "#585c5b",
          "500": "#6e7271",
          "600": "#8a8f8e",
          "700": "#a8abaa",
          "800": "#c5c7c6",
          "900": "#e2e3e3"
        },
        "white": {
          "DEFAULT": "#f1f2eb",
          "100": "#373a26",
          "200": "#6e744c",
          "300": "#a0a778",
          "400": "#c9cdb2",
          "500": "#f1f2eb",
          "600": "#f5f5f0",
          "700": "#f7f8f4",
          "800": "#fafaf8",
          "900": "#fcfdfb"
        },
        "red": {
          "DEFAULT": "#f9564f",
          "100": "#3f0402",
          "200": "#7e0905",
          "300": "#bd0d07",
          "400": "#f6170f",
          "500": "#f9564f",
          "600": "#fa7671",
          "700": "#fb9895",
          "800": "#fcbab8",
          "900": "#fedddc"
        },
        "imperial_red": {
          "DEFAULT": "#f03a47",
          "100": "#370408",
          "200": "#6e080f",
          "300": "#a50c17",
          "400": "#dc111e",
          "500": "#f03a47",
          "600": "#f36069",
          "700": "#f6878f",
          "800": "#f9afb4",
          "900": "#fcd7da"
        },
        "secondary": "#f1f2eb",
        "success": "#38a169",
        "error": "#dc111e",
        "primary": "#0b0a07",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
