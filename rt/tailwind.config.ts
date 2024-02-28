import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use a color picker to find the exact color values from the images
        'dark-background': '#000000', // Placeholder for the background color
        'text-primary': '#FFFFFF', // Placeholder for primary text color
        'text-secondary': '#CCCCCC', // Placeholder for secondary text color
        'button-bg': '#2563EB', // Placeholder for button background color
        // ... add other custom colors as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Add fontFamily if needed
      fontFamily: {
        // Add your custom font here
        'sans': ['Inter', 'sans-serif'], // Example for adding 'Inter' font
      },
    },
  },
  plugins: [],
};

export default config;
