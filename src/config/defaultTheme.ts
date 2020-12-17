import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const defaultTheme = createMuiTheme({
  backgrounds: {
    gradientPrimary:
      "linear-gradient(90deg,rgba(255, 246, 121, 1) 19%,rgba(251, 220, 54, 1) 51%,rgba(251, 219, 51, 1) 100%)",
    gradientSecondary:
      "linear-gradient(90deg, rgba(167,104,218,1) 0%, rgba(148,95,189,1) 40%, rgba(125,60,175,1) 100%)",
    inverse: "#ebf2f5",
    primary: "#ffffff",
    disable: "#ced1d4",
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
    },
    hover: {
      primary: "rgb(255, 230, 87)",
      secondary: "#7d3caf",
    },
    active: {
      primary: "#fcbd1b",
    },
    button: {
      primary: "rgba(251, 220, 54, 1)",
      secondary: "#7d3caf",
      textPrimary: "#374151",
      inverse: "#fff",
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
})

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    backgrounds: {
      gradientPrimary: React.CSSProperties["color"]
      gradientSecondary: React.CSSProperties["color"]
      inverse: React.CSSProperties["color"]
      primary: React.CSSProperties["color"]
      disable: React.CSSProperties["color"]
    }
    colors: {
      color: {
        primary: React.CSSProperties["color"]
        primaryInverse: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
        secondaryInverse: React.CSSProperties["color"]
        basic: React.CSSProperties["color"]
        basic2: React.CSSProperties["color"]
        basic3: React.CSSProperties["color"]
        default: React.CSSProperties["color"]
        info: React.CSSProperties["color"]
        disable: React.CSSProperties["color"]
        dark: React.CSSProperties["color"]
        defaultInverse: React.CSSProperties["color"]
      }
      hover: {
        primary: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
      }
      active: {
        primary: React.CSSProperties["color"]
      }
      button: {
        primary: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
        textPrimary: React.CSSProperties["color"]
        inverse: React.CSSProperties["color"]
      }
    }
    shade: {
      default: {
        idle: React.CSSProperties["color"]
        active: React.CSSProperties["color"]
        hover: React.CSSProperties["color"]
      }
      dark: {
        idle: React.CSSProperties["color"]
        active: React.CSSProperties["color"]
        hover: React.CSSProperties["color"]
      }
    }
  }
  interface ThemeOptions {
    backgrounds: {
      gradientPrimary: React.CSSProperties["color"]
      gradientSecondary: React.CSSProperties["color"]
      inverse: React.CSSProperties["color"]
      primary: React.CSSProperties["color"]
      disable: React.CSSProperties["color"]
    }
    colors: {
      color: {
        primary: React.CSSProperties["color"]
        primaryInverse: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
        secondaryInverse: React.CSSProperties["color"]
        basic: React.CSSProperties["color"]
        basic2: React.CSSProperties["color"]
        basic3: React.CSSProperties["color"]
        default: React.CSSProperties["color"]
        info: React.CSSProperties["color"]
        disable: React.CSSProperties["color"]
        dark: React.CSSProperties["color"]
        defaultInverse: React.CSSProperties["color"]
      }
      hover: {
        primary: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
      }
      active: {
        primary: React.CSSProperties["color"]
      }
      button: {
        primary: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
        textPrimary: React.CSSProperties["color"]
        inverse: React.CSSProperties["color"]
      }
    }
    shade: {
      default: {
        idle: React.CSSProperties["color"]
        active: React.CSSProperties["color"]
        hover: React.CSSProperties["color"]
      }
      dark: {
        idle: React.CSSProperties["color"]
        active: React.CSSProperties["color"]
        hover: React.CSSProperties["color"]
      }
    }
  }
}

export default defaultTheme
