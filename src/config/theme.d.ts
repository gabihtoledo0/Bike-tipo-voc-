import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    name: string
    backgrounds: {
      gradientPrimary: React.CSSProperties["color"]
      gradientSecondary: React.CSSProperties["color"]
      inverse: React.CSSProperties["color"]
      primary: React.CSSProperties["color"]
      disable: React.CSSProperties["color"]
      errorLight: React.CSSProperties["color"]
      successLight: React.CSSProperties["color"]
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
        success: React.CSSProperties["color"]
        error: React.CSSProperties["color"]
      }
      hover: {
        primary: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
        delete: React.CSSProperties["color"]
      }
      active: {
        primary: React.CSSProperties["color"]
      }
      button: {
        primary: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
        textPrimary: React.CSSProperties["color"]
        inverse: React.CSSProperties["color"]
        delete: React.CSSProperties["color"]
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
      errorLight: React.CSSProperties["color"]
      successLight: React.CSSProperties["color"]
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
        success: React.CSSProperties["color"]
        error: React.CSSProperties["color"]
      }
      hover: {
        primary: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
        delete: React.CSSProperties["color"]
      }
      active: {
        primary: React.CSSProperties["color"]
      }
      button: {
        primary: React.CSSProperties["color"]
        secondary: React.CSSProperties["color"]
        textPrimary: React.CSSProperties["color"]
        inverse: React.CSSProperties["color"]
        delete: React.CSSProperties["color"]
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
