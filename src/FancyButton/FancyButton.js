import React, { useRef } from "react";
import useRipple from "./useRipple";
import "../../css/FancyButton.scss";

export const FancyButton = ({ children }) => {
  return (
    <div className="btnClass">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  );
};

export const FancyButtonGroup = ({ children }) => {
  const btnGroupRef = useRef(null);
  useRipple(btnGroupRef);

  return (
    <div ref={btnGroupRef} className="btnGroup">
      {children}
    </div>
  );
};
