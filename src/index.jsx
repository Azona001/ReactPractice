import React, { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import colorData from "./color-data.json";

export const ColorContext = createContext(colorData);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ColorContext.Provider value={{ colorData }}>
      <App />
    </ColorContext.Provider>
  </StrictMode>
);
