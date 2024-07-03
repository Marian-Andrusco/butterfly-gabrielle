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
      {
        therapy: {
          primary: "#8762FF",
          secondary: "#FD35E4",
          accent: "3FCEB4",
          neutral: "#fff",
          "base-100": "#2D313D",
          "base-200": "#A9ABBD",
        },
      },
      "light",
    ],
  },
};
