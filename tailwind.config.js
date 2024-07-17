/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      // {
      // light: {
      //   ...require("daisyui/src/theming/themes")["light"],
      //   primary: "pink",
      //   secondary: "2FD8BC",
      // },
      "light",
      // },
    ],
  },
};
