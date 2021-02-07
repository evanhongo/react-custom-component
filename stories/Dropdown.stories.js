import React, { useState } from "react";
import { Dropdown } from "../src/Dropdown";

const options = [
  { key: 1, text: "123" },
  { key: 2, text: "234" },
  { key: 3, text: "333" },
  { key: 4, text: "321" },
  { key: 5, text: "2345" },
  { key: 6, text: "3456" },
  { key: 7, text: "ABC3" },
  { key: 8, text: "DEF" },
  { key: 9, text: "GHI" },
];

export default {
  title: "Example/Dropdown",
  component: Dropdown,
};

const Template = ({ value, onChange, ...args }) => {
  const [selected, setSelected] = useState("");
  const handleChange = (data) => {
    setSelected(data);
  };
  return <Dropdown value={selected} onChange={handleChange} {...args} />;
};

export const Single = Template.bind({});
Single.args = {
  placeholder: "測試",
  options,
  style: {
    width: "300px",
  },
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  placeholder: "測試",
  options,
  style: {
    width: "300px",
  },
};
