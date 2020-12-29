import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      color: ${theme.colors.color.defaultInverse};
      background-color: ${theme.backgrounds.gradientPrimary};
    }

      body,
      input,
      button,
    textarea {
      font: 600 18px Nunito, sans-serif;
    }
    `}
`
export default GlobalStyle
