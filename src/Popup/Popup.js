import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledPopup = styled.div`
  .trigger {
    width: fit-content;
  }

  .content {
    position: absolute;
    padding: 15px;
    min-width: 200px;
    background: white;
    border: 1px solid #d4d4d5;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
      0 2px 10px 0 rgba(34, 36, 38, 0.15);
  }

  .tail {
    display: inline-block;
    position: absolute;
    margin-top: 5px;
    width: 15px;
    height: 15px;
    background: white;
    border-right: 1px solid #d4d4d5;
    border-bottom: 1px solid #d4d4d5;
    transform: rotate(45deg);
    user-select: none;
  }
`

export default function Popup({ trigger, content, style }) {
  const rootRef = useRef();

  useEffect(() => {
    const contentObj = rootRef.current.childNodes[1];
    contentObj.style.opacity = 0;
  }, []);

  useEffect(() => {
    const triggerObj = rootRef.current.childNodes[0];
    const contentObj = rootRef.current.childNodes[1];

    const showContent = () => {
      contentObj.style.opacity = 1;

      contentObj.style.marginTop =
        -(triggerObj.offsetHeight + contentObj.offsetHeight + 15) + "px";
      contentObj.style.marginLeft =
        -(contentObj.offsetWidth - triggerObj.offsetWidth) / 2 + "px";

      contentObj.lastChild.style.marginTop = "7px";
      contentObj.lastChild.style.marginLeft =
        (contentObj.offsetWidth - 15 - 20) / 2 + "px";
    };

    const hideContent = () => {
      contentObj.style.opacity = 0;
    };

    triggerObj.onmouseover = showContent;
    triggerObj.onmouseout = hideContent;
  }, [trigger, content]);

  return (
    <StyledPopup ref={rootRef} style={{ ...style, position: "relative" }}>
      {/* trigger */}
      <div className="trigger">{trigger}</div>
      {/* content */}
      <div className="content">
        {content}
        <div className="tail" />
      </div>
    </StyledPopup>
  );
}
