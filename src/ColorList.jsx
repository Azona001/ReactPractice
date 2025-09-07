import React from "react";
import Color from "./Color.jsx";
import { useColors } from "./color-hooks.jsx";

const ColorList = () => {
  const { colors } = useColors();
  if (!colors.length) return <div>No colors Listed. (Add a color)</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
