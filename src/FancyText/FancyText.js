import React from "react";
import styled from "styled-components";

const Glitch =  (as) => styled[as]`
  position: relative;
  &::before {
    content: attr(data-text);
    position: absolute;
    left: -1.5px;
    width: fit-content;
    text-shadow: 1.5px 0 #69CAD1;
    animation: glitch1 .8s infinite linear alternate-reverse;
  }
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 1.5px;
    width: fit-content;
    text-shadow: -1.5px 0 #EF1751;
    animation: glitch2 1s infinite linear alternate-reverse;
  }

  @keyframes glitch1 {
    0% {
      clip-path: inset(5% 0 15% 0);
    }
    20% {
      clip-path: inset(61% 0 9% 0);
    }
    40% {
      clip-path: inset(5% 0 81% 0);
    }
    60% {
      clip-path: inset(21% 0 52% 0);
    }
    80% {
      clip-path: inset(11% 0 70% 0);
    }
    100% {
      clip-path: inset(68% 0 6% 0);
    }
  }

  @keyframes glitch2 {
    0% {
      clip-path: inset(82% 0 9% 0);
    }
    20% {
      clip-path: inset(31% 0 44% 0);
    }
    40% {
      clip-path: inset(49% 0 11% 0);
    }
    60% {
      clip-path: inset(6% 0 85% 0);
    }
    80% {
      clip-path: inset(40% 0 37% 0);
    }
    100% {
      clip-path: inset(90% 0 3% 0);
    }
  }
`

const Shaking = (as) => styled[as]`
  position: relative;
  &::before, 
  &::after {
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    z-index: -1;
  }
  &::before {
    color: #EF1751;
    animation: move .3s cubic-bezier(.87,.36,.5,.68) both infinite;
  }
  &::after {
    color: #69CAD1;
    animation: move .3s cubic-bezier(.87,.36,.5,.68) reverse both infinite;
  }

  @keyframes move {
    0% {
      transform: 0;
    }

    20% {
      transform: translate(-3px, 3px);
    }

    40% {
      transform: translate(-3px, -3px);
    }

    60% {
      transform: translate(3px, 3px);
    }

    80% {
      transform: translate(3px, -3px);
    }

    100% {
      transform: translate(0);
    }
  }
`

const FancyText = ({as= "div", type, style, text }) => {
  switch (type) {
    case "glitch" :
      const GlitchElem = Glitch(as); 
      return (
        <GlitchElem style={style} data-text={text}>
          {text}
        </GlitchElem>
      )
    case "shaking" :
      const ShakingElem = Shaking(as);
      return (
        <ShakingElem style={style} data-text={text}>
          {text}
        </ShakingElem>
      )
  }
}

export default FancyText;