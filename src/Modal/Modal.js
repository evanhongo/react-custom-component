import React, { useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, style, children }) => {
  const modalRef = useRef();
  const targetDomRef = useRef(document.createElement('div'));

  useEffect(() => {
    const body = document.querySelector("body");
    body.appendChild(targetDomRef.current);

    return () => {
      body.removeChild(targetDomRef.current);
    }
  }, []);

  //Closed when esc keydown
  useEffect(() => {
    const handleKeydown = (e) => {
      if(e.keyCode === 27){        
        onClose?.();
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => { 
      console.log("456")
      window.addEventListener("keydown", handleKeydown);
    }
  }, [isOpen]);

  const handleClick = useMemo(() => (e) => {
    if (modalRef.current === e.target) return onClose?.();
  }, [])

  const modalContainer =  (
    <div
      ref={modalRef}
      style={{        
        position: "fixed",
        display: "flex",
        visibility: isOpen ? "visible" : "hidden",
        backgroundColor: "rgba(0,0,0,0.85)",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          cursor: "default",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          textAlign: "center",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modalContainer, targetDomRef.current)
};

Modal.Header = ({ style, children }) => (
  <div
    style={{
      padding: "1.25rem 1.5rem",
      borderBottom: "1px solid rgba(34,36,38,.15)",
      fontWeight: "bold",
      fontSize: "1.5rem",
      ...style,
    }}
  >
    {children}
  </div>
);

Modal.Content = ({ style, children }) => (
  <div style={{ padding: "1.5rem", background: "#fff", ...style }}>
    {children}
  </div>
);

Modal.Actions = ({ style, children }) => (
  <div
    style={{
      padding: "1rem 1rem",
      background: "#f9fafb",
      borderTop: "1px solid rgba(34,36,38,.15)",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      textAlign: "right",
      ...style,
    }}
  >
    {children}
  </div>
);

export default Modal;
