/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "font-Arial": ["Arial", "sans-serif"],
      },
      colors: {
        customGray: "#797c7d",
      },
    },
  },
  plugins: [],
};
