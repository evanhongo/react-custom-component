import React from "react";
import { Loader } from "../src/Loader";

export default {
  title: "Example/Loader",
  component: Loader,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["rolling", "spinning"],
      },
    },
  },
};

const Template = (args) => <Loader {...args} />;

export const Rolling = Template.bind({});
Rolling.args = {
  type: "rolling",
  style: {
    background: "transparent",
  },
};

export const Spinning = Template.bind({});
Spinning.args = {
  type: "spinning",
  style: {
    background: "transparent",
  },
};
