import React, { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";

const StyledSlider = styled.nav`
  height: 100%;
  width: 0;
  position: fixed;
  top: 0;
  background: linear-gradient(135deg, #d39cae 0%, rgb(130, 184, 194) 100%);
  overflow-x: hidden;
`

export default function Slider({
  isOpen = false,
  width,
  position,
  style,
  children,
}) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const elems = [...sliderRef.current.childNodes];
    Promise.all(
      elems.map(async (elem) => {
        await gsap.to(elem, { opacity: 0 });
      })
    );
  }, []);

  const openSlider = useCallback(async () => {
    await gsap.to("nav", { width: width, duration: 0.5 });
    const elems = [...sliderRef.current.childNodes];
    elems.map(async (elem) => {
      await gsap.to(elem, { opacity: 1, duration: 1 });
    });
  }, [width]);

  const closeSlider = useCallback(async () => {
    const elems = [...sliderRef.current.childNodes];
    await Promise.all(
      elems.map(async (elem) => {
        await gsap.to(elem, { opacity: 0, duration: 0.5 });
      })
    );
    gsap.to("nav", { width: 0, duration: 0.5 });
  }, []);

  useEffect(() => {
    if (isOpen) openSlider();
    else closeSlider();
  }, [isOpen]);

  const sliderStyle = position === "left" ? { left: 0 } : { right: 0 };
  return (
    <StyledSlider
      ref={sliderRef}
      style={{ ...style, ...sliderStyle }}
    >
      {children}
    </StyledSlider>
  );
}
