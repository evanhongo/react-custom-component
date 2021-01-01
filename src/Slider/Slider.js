import React, { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import "../../css/Slider.scss";

export default function Slider({ isOpen = false, width, position, children }) {
  const navMenuRef = useRef(null);

  useEffect(() => {
    const elems = [...navMenuRef.current.childNodes];
    Promise.all(
      elems.map(async (elem) => {
        await gsap.to(elem, { opacity: 0 });
      })
    );
  }, []);

  const openSlider = useCallback(async () => {
    await gsap.to(".navMenu", { width: width, duration: 0.5 });
    const elems = [...navMenuRef.current.childNodes];
    elems.map(async (elem) => {
      await gsap.to(elem, { opacity: 1, duration: 1 });
    });
  }, [width]);

  const closeSlider = useCallback(async () => {
    const elems = [...navMenuRef.current.childNodes];
    await Promise.all(
      elems.map(async (elem) => {
        await gsap.to(elem, { opacity: 0, duration: 0.5 });
      })
    );
    gsap.to(".navMenu", { width: 0, duration: 0.5 });
  }, []);

  useEffect(() => {
    if (isOpen) openSlider();
    else closeSlider();
  }, [isOpen]);

  const navMenuStyle = position === "left" ? { left: 0 } : { right: 0 };
  return (
    <nav className="navMenu" ref={navMenuRef} style={navMenuStyle}>
      {children}
    </nav>
  );
}
