import React from 'react';
import { render } from "react-dom";
import "./styles/global.css";
import Routes from "./routes/index";

export default function App() {
  return (
    <Routes/>
  );
}

render(<App />, document.getElementById("root"));
