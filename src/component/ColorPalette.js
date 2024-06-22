// src/ColorPalette.js

import React, { useState } from "react";
import "./styles/colorPalette.css";

const initialColors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F33FFF",
  "#F3FF33",
  "#3FFF33",
  "#33F3FF",
  "#FF33F3",
  "#FF3333",
  "#33FF33",
];

const ColorPalette = () => {
  const [colors, setColors] = useState(initialColors);
  const [newColor, setNewColor] = useState("");

  const addColor = () => {
    if (newColor) {
      setColors([...colors, newColor]);
      setNewColor("");
    }
  };

  return (
    <div>
      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
        placeholder="Add a new color"
      />
      <button onClick={addColor}>Add Color</button>
    </div>
  );
};

export default ColorPalette;
