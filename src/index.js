import React from "react"
import { render } from "react-dom"
import GlobalStyle from "./assets/styles/global"
import Routes from "./routes/index"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./config/defaultTheme"

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  )
}

render(<App />, document.getElementById("root"))
