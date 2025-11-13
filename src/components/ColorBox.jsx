import React, { useState } from "react";
import "./ColorBox.css";

import { Button } from "./Button.jsx";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function ColorBox() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="colorbox-container">
      <h3>Color Box Demo</h3>

      <div className="color-buttons">
        {COLORS.map((color) => (
          <Button
            key={color}
            text={color}
            color={backgroundColor === color ? "white" : color}
            fontSize={14}
            handleClick={() => onButtonClick(color)}
          />
        ))}
      </div>

      <div
        className="color-display-box"
        style={{
          backgroundColor,
        }}
      >
        <p>Current color: {backgroundColor}</p>
      </div>
    </div>
  );
}

export default ColorBox;
