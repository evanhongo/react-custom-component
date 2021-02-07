import React from "react";
import { Popup } from "../src/Popup";

export default {
  title: "Example/Popup",
  component: Popup,
  argTypes: {},
};

const Template = (args) => (
  <Popup
    {...args}
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
  />
);

export const Primary = Template.bind({});
Primary.args = {
  style: { margin: "200px 200px" },
};
