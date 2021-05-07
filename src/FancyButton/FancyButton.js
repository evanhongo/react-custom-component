import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useRipple from "./useRipple";

const StyledFancyButton = styled.div`
  display: block;
  position: relative;
  padding: 10px;
  border: 0;
  background: linear-gradient(90deg, #755bea, #ff72c0);
  font-size: 35px;
  color: rgb(241, 236, 236);
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: rgb(243, 10, 10);
  }
  span {
    position: absolute;
    display: block;
  }
  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #1707f1f1);
    animation: animate1 1s linear infinite;
  }
  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #1707f1f1);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
  }
  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #1707f1f1);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
  }
  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #1707f1f1);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  
  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
  
  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }
  
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }  

  span:nth-child(n+5) {
    position: absolute;
    background: #ffff;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    animation: ripple 1s linear;
  }

  @keyframes ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
`
export const FancyButton = ({ style, onClick, children }) => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current?.addEventListener("click", onClick);
    return () => {
      if (onClick) btnRef.current?.removeEventListener("click", onClick);
    };
  }, [onClick]);

  return (
    <StyledFancyButton
      ref={btnRef}
      style={style}
      data-testid="fancyButton"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </StyledFancyButton>
  );
};

const StyledFancyButtonGroup = styled.div`
  width: fit-content;
  margin: 0 auto;
`
export const FancyButtonGroup = ({ style, children }) => {
  const btnGroupRef = useRef(null);
  useRipple(btnGroupRef);

  return (
    <StyledFancyButtonGroup ref={btnGroupRef}  style={style}>
      {children}
    </StyledFancyButtonGroup>
  );
};
