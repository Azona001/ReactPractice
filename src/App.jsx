import React from "react";
import ColorList from "./ColorList.jsx";
import "./styles.css";
import AddColor from "./AddColor.jsx";

export default function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
   <AddColor />   
   <ColorList />
    </div>
  );
}
