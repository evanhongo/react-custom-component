import React, { useState } from "react";
import { FancyButton } from "../src/FancyButton";
import { Slider } from "../src/Slider";

export default {
  title: "Example/Slider",
  component: Slider,
  argTypes: {},
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FancyButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
        test
      </FancyButton>
      <Slider {...args} isOpen={isOpen}></Slider>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  position: "left",
  width: "200px",
};
