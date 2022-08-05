import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  filter: ${props => props.isLoading ? 'blur(10px)' : 'blur(0px)'};
  transition: filter 0.5s linear;
`

export default function ProgressiveImg({ placeholderSrc, src, ...props }) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const isLoading = useMemo(()=> placeholderSrc && imgSrc === placeholderSrc, [placeholderSrc, imgSrc]);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <StyledImg
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      isLoading={isLoading}
    />
  );
};
