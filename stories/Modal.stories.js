import React, { useState } from "react";
import { FancyButton } from "../src/FancyButton";
import { Modal } from "../src/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {},
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FancyButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
        test
      </FancyButton>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>123</Modal.Header>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
