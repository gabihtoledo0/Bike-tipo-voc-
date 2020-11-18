import React from 'react';
import { render } from "react-dom";
import GlobalStyle from "./assets/styles/global"
import Routes from "./routes/index";

export default function App() {
  return (
    <>
    <GlobalStyle />
    <Routes/>
    </>
  );
}

render(<App />, document.getElementById("root"));
