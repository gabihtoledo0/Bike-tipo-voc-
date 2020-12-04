import React from "react"
import { render } from "react-dom"
import GlobalStyle from "./assets/styles/global"
import Routes from "./routes/index"
import { ThemeProvider as ThemeProviderStyled } from "styled-components"
import { ThemeProvider } from "@material-ui/styles"
import { StylesProvider } from "@material-ui/core"
import defaultTheme from "./config/defaultTheme"

export default function App() {
  return (
    <>
      <StylesProvider injectFirst>
        <ThemeProvider theme={defaultTheme}>
          <ThemeProviderStyled theme={defaultTheme}>
            <GlobalStyle />
            <Routes />
          </ThemeProviderStyled>
        </ThemeProvider>
      </StylesProvider>
    </>
  )
}

render(<App />, document.getElementById("root"))
