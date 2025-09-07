import React, { createContext, useContext, useState } from "react";
import colorData from "./color-data.json";
import { v4 as uuidv4 } from "uuid";

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) =>
    setColors((prev) => [...prev, { id: uuidv4(), rating: 0, title, color }]);

  const rateColor = (id, rating) => {
    setColors((prev) =>
      prev.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  };

  const removeColor = (id) => {
    setColors((prev) => prev.filter((color) => color.id !== id));
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
