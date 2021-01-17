import React, { useEffect, useRef } from "react";
import "../../css/Popup.scss";

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
    <div ref={rootRef} style={{ ...style, position: "relative" }}>
      {/* trigger */}
      <div className="trigger">{trigger}</div>
      {/* content */}
      <div className="content">
        {content}
        <div className="tail" />
      </div>
    </div>
  );
}
