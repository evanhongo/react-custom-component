import React, { useMemo, useCallback, useEffect } from "react";
import styled from "styled-components";

const StyledSlider = styled.nav`
  height: 100%;
  width: ${props => props.isOpen? props.width : 0};
  position: fixed;
  top: 0;
  background: linear-gradient(135deg, #d39cae 0%, rgb(130, 184, 194) 100%);
  overflow-x: hidden;
  transition: width .3s cubic-bezier(.87,.36,.5,.68);
`

export default function Slider({
  isOpen = false,
  width = "200px",
  position,
  style,
  children,
}) {
  const sliderStyle = useMemo(() => position === "left" ? { left: 0 } : { right: 0 }, [position]);
  return (
    <StyledSlider
      style={{ ...style, ...sliderStyle }}
      isOpen={isOpen}
      width={width}
    >
      {children}
    </StyledSlider>
  );
}
