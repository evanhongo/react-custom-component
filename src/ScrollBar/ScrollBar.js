import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  background: linear-gradient(to top, #008aff, #00ffe7);
  animation: animate 5s linear infinite;

  @keyframes animate {
    0%,
    100% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(360deg);
    }
  }
`
const StyledScrollPath = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
`

export default function ScrollBar({ width }) {
  const progressBar = useRef(null);

  function handleScroll() {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.current.style.height = progress + "%";
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <StyledProgressBar  ref={progressBar} style={{ width }}></StyledProgressBar>
      <StyledScrollPath />
    </div>
  );
}
