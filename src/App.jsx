import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.jsx";
import "./styles.css";

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="app">
      <h1>Hello World</h1>

      <ColorList
        colors={colors}
        OnRateColor={(id, rating) =>
          setColors((prev) =>
            prev.map((color) =>
              color.id === id ? { ...color, rating } : color
            )
          )
        }
        onRemoveColor={(id) =>
          setColors((prev) => prev.filter((color) => color.id !== id))
        }
      />
    </div>
  );
}
