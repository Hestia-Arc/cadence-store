/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    screens: {},
    fontFamily: {},

    colors: {
      primary: {
        800: "#171D28",
        900: "#000000",
      },
      white: "#FFFFFF",
      blue: "#377DFF",
      green: "#38CB89",
      orange: "#FFAB00",
      red: "#FF5630",
      gray: {
        100: "#FEFEFE",
        200: "#F3F5F7",
        300: "#E8ECEF",
        400: "#6C7275",
        500: "#343839",
        600: "#232627",
        700: "#141718",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
        inter: ["Inter", "san-serif"],
      },
      fontSize: {
        hero: [
          "96px",
          { lineHeight: "96px", letterSpacing: "-2%", fontWeight: 500 },
        ], // [fontSize, {lineHeight?, letterSpacing?, fontWeight?}]
        h1: [
          "80px",
          { lineHeight: "84px", letterSpacing: "-3px", fontWeight: 500 },
        ],
        h2: [
          "67px",
          { lineHeight: "76px", letterSpacing: "-2px", fontWeight: 500 },
        ],
        h3: [
          "54px",
          { lineHeight: "58px", letterSpacing: "-1px", fontWeight: 500 },
        ],
        h4: [
          "40px",
          { lineHeight: "44px", letterSpacing: "-0-4px", fontWeight: 500 },
        ],
        h5: [
          "px",
          { lineHeight: "74px", letterSpacing: "-2px", fontWeight: 500 },
        ],
        h6: [
          "px",
          { lineHeight: "74px", letterSpacing: "-2px", fontWeight: 500 },
        ],
        h7: [
          "px",
          { lineHeight: "74px", letterSpacing: "-2px", fontWeight: 500 },
        ],
        body1Reg: [
          "20px",
          { lineHeight: "32px", letterSpacing: "0px", fontWeight: 700 },
        ],
        body1Bold: [
          "20px",
          { lineHeight: "32px", letterSpacing: "0px", fontWeight: 700 },
        ],
        body1Semi: [
          "20px",
          { lineHeight: "32px", letterSpacing: "0px", fontWeight: 700 },
        ],
        body2Reg: [
          "20px",
          { lineHeight: "32px", letterSpacing: "0px", fontWeight: 700 },
        ],
        body2Bold: [
          "20px",
          { lineHeight: "32px", letterSpacing: "0px", fontWeight: 700 },
        ],
        body2Semi: [
          "20px",
          { lineHeight: "32px", letterSpacing: "0px", fontWeight: 700 },
        ],
        capR1: [
          "14px",
          { lineHeight: "22px", letterSpacing: "0px", fontWeight: "600" },
        ],
        capS1: [
          "14px",
          { lineHeight: "22px", letterSpacing: "0px", fontWeight: "600" },
        ],
        capB1: [
          "14px",
          { lineHeight: "22px", letterSpacing: "0px", fontWeight: "600" },
        ],
        capR2: [
          "14px",
          { lineHeight: "22px", letterSpacing: "0px", fontWeight: "600" },
        ],
        capS2: [
          "14px",
          { lineHeight: "22px", letterSpacing: "0px", fontWeight: "600" },
        ],
        capB2: [
          "14px",
          { lineHeight: "22px", letterSpacing: "0px", fontWeight: "600" },
        ],
        hairline1: ["16px", "16px"],
        hairline2: ["12px", "12px"],
        btnXL: ["26px", "38px"],
        btnL: ["22px", "34px"],
        btnMd: ["18px", "32px"],
        btnSm: ["16px", "28px"],
        btnXS: ["14px", "24px"],
      },
      spacing: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
