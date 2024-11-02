/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";
import colors from "tailwindcss/colors";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: colors.zinc[50],
      black: colors.zinc[950],
      gray: colors.zinc,
      red: colors.red,
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    animate,
    // ...
  ],
};
