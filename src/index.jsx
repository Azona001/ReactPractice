import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ColorProvider from "./color-hooks.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </StrictMode>
);
