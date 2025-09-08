import React from "react";
import { useInput } from "./useInput";
import { useColors } from "./color-hooks";

const AddColor = ({ onNewColor = (f) => f }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          {...titleProps}
          type="text"
          placeholder="color title..."
          required
          id="title"
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input {...colorProps} type="color" id="color" required />
      </div>
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddColor;
