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
      <Dropdown
        multiple
        placeholder="123456"
        options={[
          { key: 1, text: "123" },
          { key: 2, text: "234" },
          { key: 3, text: "333" },
          { key: 4, text: "321" },
          { key: 5, text: "2345" },
          { key: 6, text: "3456" },
          { key: 7, text: "ABC3" },
          { key: 8, text: "DEF" },
          { key: 9, text: "GHI" },
        ]}
        value={selected}
        onChange={(key) => {
          setSelected(key);
        }}
        style={{ marginLeft: "300px" }}
      />
      <div>
        <Dropdown
          multiple
          placeholder="123"
          options={[
            { key: 1, text: "123" },
            { key: 2, text: "234" },
            { key: 3, text: "333" },
            { key: 4, text: "321" },
            { key: 5, text: "2345" },
            { key: 6, text: "3456" },
            { key: 7, text: "ABC3" },
            { key: 8, text: "DEF" },
            { key: 9, text: "GHI" },
          ]}
          value={selected}
          onChange={(key) => {
            setSelected(key);
          }}
          style={{ marginLeft: "100px" }}
        />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header>123</Modal.Header>
        </Modal>
      </div>
      <Popup
        trigger={
          <button
            style={{
              fontSize: "30px",
              color: "#df2929",
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => setIsOpen(true)}
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
