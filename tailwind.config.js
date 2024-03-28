/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    screens: {},
    fontFamily: {},
    fontSize: {
      //Poppins
      hero: [
        "96px",
        { lineHeight: "96px", letterSpacing: "-2%", fontWeight: "" },
      ], // [fontSize, {lineHeight?, letterSpacing?, fontWeight?}]
      h1: ["", {}],
      h2: ["62px", {lineHeight: "74px", letterSpacing: "-2px", fontWeight: 500}],
      h3: ["", {}],
      h4: ["", {}],
      h5: ["", {}],
      h6: ["", {}],
      h7: ["", {}],
      text: {
        26: "26px",
        22: "22px",
        20: "20px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12pxv",
      },
      cap1: {
        // light: ['96px', {lineHeight:'96px',letterSpacing:'-2%',fontWeight: ''}],
        semi: [
          "14px",
          { lineHeight: "22px", letterSpacing: "0px", fontWeight: "300" },
        ],
        // bold:['96px', {lineHeight:'96px',letterSpacing:'-2%',fontWeight: ''}],
      },
      btnXL: "",
      btnL: "",
      btnMd: "",
      btnSm: "",
      btnXS: "",
    },
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
      spacing: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
