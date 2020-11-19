import React from "react"
import { render } from "react-dom"
import GlobalStyle from "./assets/styles/global"
import Routes from "./routes/index"
import { ThemeProvider } from "styled-components"
import { StylesProvider, MuiThemeProvider } from "@material-ui/core"
import defaultTheme from "./config/defaultTheme"

export default function App() {
  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={defaultTheme}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Routes />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  )
}

render(<App />, document.getElementById("root"))
