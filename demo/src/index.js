import React, { useState, useEffect,useRef } from "react";
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
  ProgressiveImg,
  VideoPlayer
} from "../../src";

// import image from "../../img/large.jpg";
// import placeholderSrc from "../../img/tiny.jpg";


export default function Demo() {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");

  function onClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    console.log("render");
  }, [isOpen]);

  return (
    <>
      <ScrollBar />
      <VideoPlayer width="1000px" height="600px" src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
      {/* <FancyText as="div" type="glitch" text="Girls Frontline" style={{ margin: "0 auto", width: "fit-content", fontSize: "100px" }} /> */}
      {/* <FancyText  type="shaking" text="Test123456" style={{ fontSize: "70px" }} /> */}
      {/* <ProgressiveImg
        src={image}
        placeholderSrc={placeholderSrc}
        width="700"
        height="465"
      /> */}
    </>
  )
}

render(<Demo />, document.querySelector("#demo"));
