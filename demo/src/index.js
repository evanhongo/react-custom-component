import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import {
  FancyButton,
  FancyButtonGroup,
  ScrollBar,
  Slider,
  Modal,
  Loader,
  Dropdown,
  Popup,
  FancyText,
} from "../../src";

export default function Demo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <ScrollBar />
      <FancyButtonGroup>
        <FancyButton>Test1</FancyButton>
      </FancyButtonGroup>
      {/* <FancyText as="div" type="glitch" text="Girls Frontline" style={{ margin: "0 auto", width: "fit-content", fontSize: "100px" }} /> */}
      {/* <FancyText  type="shaking" text="Test123456" style={{ fontSize: "70px" }} /> */}
    </>
  )
}

render(<Demo />, document.querySelector("#demo"));
