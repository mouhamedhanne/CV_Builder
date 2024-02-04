import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_button: "#4D42CD",
        hover_bg_button: "#0D21BC",
        bg_card: "#020817",
        // traduction app
        primary_color: "#356aff",
        bg_color: "#f5f5f5",
        light_bg_color: "#fff",
        text_color: "#111116",
        light_text_color: "#cdccd1",
      },
    },
  },
  plugins: [],
};
export default config;
