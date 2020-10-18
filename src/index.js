import React from 'react';
import { render } from "react-dom";

export function App() {
  return (
    <p className="text-purple-500">
      Oii
    </p>
  );
}

render(<App />, document.getElementById("root"));
