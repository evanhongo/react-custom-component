import React, { useRef } from "react";
import useRipple from "./useRipple";
import "../../css/FancyButton.scss";

export const FancyButton = ({ style, children }) => {
  return (
    <div className="btnClass" style={style}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  );
};

export const FancyButtonGroup = ({ style, children }) => {
  const btnGroupRef = useRef(null);
  useRipple(btnGroupRef);

  return (
    <div ref={btnGroupRef} className="btnGroup" style={style}>
      {children}
    </div>
  );
};
