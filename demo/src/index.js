import React, { useState } from "react";
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
} from "../../src";

export default function Demo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <Dropdown
        options={[
          { key: 1, text: "123" },
          { key: 2, text: "234" },
          { key: 3, text: "345" },
          { key: 4, text: "ABC" },
          { key: 5, text: "DEF" },
          { key: 6, text: "GHI" },
        ]}
        value={selected}
        onChange={(key) => {
          setSelected(key);
        }}
      />
      <Popup
        trigger={
          <button
            style={{
              fontSize: "30px",
              color: "#df2929",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            Test
          </button>
        }
        content={<div style={{ fontSize: "30px" }}>Hello World</div>}
        style={{ margin: "300px 300px" }}
      />
    </>
  );

  // <div
  //   style={{
  //     display: "flex",
  //     width: "100%",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   }}
  // >
  //   <h1 style={{ display: "inline-block" }}>react-custom-component Demo</h1>
  //   <button
  //     style={{
  //       fontSize: "30px",
  //       color: "#df2929",
  //       cursor: "pointer",
  //     }}
  //     onClick={toggle}
  //   >
  //     Toggle
  //   </button>
  //   <ScrollBar />
  //   <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  //     <Modal.Header style={{ fontSize: "30px" }}>Warning!!～</Modal.Header>
  //     <Modal.Content>
  //       <p style={{ fontSize: "30px" }}>Are you sure?</p>
  //     </Modal.Content>
  //     <Modal.Actions>
  //       <input
  //         type="button"
  //         value="No"
  //         style={{
  //           marginRight: "10px",
  //           width: "100px",
  //           height: "50px",
  //           fontSize: "20px",
  //         }}
  //         onClick={() => setIsOpen(false)}
  //       />
  //       <input
  //         type="button"
  //         value="Yes"
  //         style={{ width: "100px", height: "50px", fontSize: "20px" }}
  //         onClick={() => setIsOpen(false)}
  //       />
  //     </Modal.Actions>
  //   </Modal>
  // </div>
}

render(<Demo />, document.querySelector("#demo"));
