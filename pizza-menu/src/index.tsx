import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <h1>Homepage</h1>;
}

// React v18
const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
