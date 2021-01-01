import React, { useState } from "react";
import { render } from "react-dom";

import { FancyButton, FancyButtonGroup, ScrollBar, Slider } from "../../src";

export default function Demo() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ display: "inline-block" }}>react-custom-component Demo</h1>
      <button
        style={{
          fontSize: "30px",
          color: "#df2929",
          cursor: "pointer",
        }}
        onClick={toggle}
      >
        Toggle
      </button>
      <ScrollBar />
      <Slider width={250} isOpen={isOpen} position="left">
        <FancyButtonGroup>
          <FancyButton>Button1</FancyButton>
          <FancyButton>Button2</FancyButton>
        </FancyButtonGroup>
      </Slider>
    </div>
  );
}

render(<Demo />, document.querySelector("#demo"));
