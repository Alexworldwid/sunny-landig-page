/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        softRed: 'hsl(var(--Soft-red))',
        myYellow: 'hsl(var(--Yellow))',
        DarkDesaturatedCyan: 'hsl(var(--Dark-desaturated-cyan))',
        DarkBlue: 'hsl(var(--Dark-blue))',
        DarkModerateCyanFooter: 'hsl(var(--Dark-moderate-cyan-footer))',
        VeryDarkDesaturatedBlue: 'hsl(var(--Very-dark-desaturated-blue))',
        VeryDarkGrayishBlue: 'hsl(var(--Very-dark-grayish-blue))',
        DarkGrayishBlue: 'hsl(var(--Dark-grayish-blue))',
        GrayishBlue: 'hsl(var(--Grayish-blue))',
        White: 'hsl(var(--White))',
      },
    },
  },
  plugins: [],
};
