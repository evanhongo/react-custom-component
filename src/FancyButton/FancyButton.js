import React, { useEffect, useRef } from "react";
import useRipple from "./useRipple";
import "../../css/FancyButton.scss";

export const FancyButton = ({ style, onClick, children }) => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current?.addEventListener("click", onClick);
    return () => {
      if (onClick) btnRef.current?.removeEventListener("click", onClick);
    };
  }, [onClick]);

  return (
    <div
      ref={btnRef}
      className="btnClass"
      style={style}
      data-testid="fancyButton"
    >
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
