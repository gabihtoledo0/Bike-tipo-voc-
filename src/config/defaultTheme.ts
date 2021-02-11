export default {
  name: "defaultTheme",
  backgrounds: {
    gradientPrimary:
      "linear-gradient(90deg,rgba(255, 246, 121, 1) 19%,rgba(251, 220, 54, 1) 51%,rgba(251, 219, 51, 1) 100%)",
    gradientSecondary:
      "linear-gradient(90deg, rgba(167,104,218,1) 0%, rgba(148,95,189,1) 40%, rgba(125,60,175,1) 100%)",
    inverse: "#ebf2f5",
    primary: "#ffffff",
    disable: "#ced1d4",
    errorLight: "#f8d0d9",
    successLight: "#ceffe4",
  },
  colors: {
    color: {
      primary: "rgba(251, 220, 54, 1)",
      primaryInverse: "#945fbd",
      secondary: "rgba(255, 246, 121, 1)",
      secondaryInverse: "#7d3caf",
      basic: "#feedc0",
      basic2: "#fff4af",
      basic3: "#ffec75",
      default: "#ffdd00",
      info: "#4A5568",
      disable: "#747e85",
      dark: "#000",
      defaultInverse: "#ffffff",
      success: "#19795e",
      error: "#d23134",
    },
    hover: {
      primary: "rgb(255, 230, 87)",
      secondary: "#7d3caf",
      delete: "#f8d0d9",
    },
    active: {
      primary: "#fcbd1b",
    },
    button: {
      primary: "rgba(251, 220, 54, 1)",
      secondary: "#945fbd",
      textPrimary: "#374151",
      inverse: "#fff",
      delete: "#d23134",
    },
  },
  shade: {
    default: {
      idle: "0 2px 16px 0 rgba(47, 57, 65, 0.16)",
      active: "0 2px 8px -2px rgba(47, 57, 65, 0.16)",
      hover:
        "0 2px 16px 0 rgba(47, 57, 65, 0.16), 0 2px 8px -2px rgba(47, 57, 65, 0.16)",
    },
    dark: {
      idle: "0 2px 16px 0 rgba(47, 57, 65, 0.16)",
      active: "0 2px 8px -2px rgba(47, 57, 65, 0.32)",
      hover:
        "0 2px 16px 0 rgba(47, 57, 65, 0.16), 0 2px 8px -2px rgba(47, 57, 65, 0.32), 0 2px 16px 0 rgba(47, 57, 65, 0.32)",
    },
  },
}

