import React from "react";
import { FancyButton } from "../src/FancyButton";

export default {
  title: "Example/FancyButton",
  component: FancyButton,
  argTypes: {},
};

const Template = (args) => <FancyButton {...args}>test</FancyButton>;

export const Primary = Template.bind({});
Primary.args = {
  style: {
    width: "fit-content",
  },
};
