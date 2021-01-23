import React, { useRef } from "react";

const Modal = ({ isOpen, onClose, style, children }) => {
  const modalRef = useRef();

  return (
    <div
      ref={modalRef}
      style={{
        zIndex: 1000,
        position: "fixed",
        display: isOpen ? "flex" : "none",
        backgroundColor: "rgba(0,0,0,0.85)",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
      onClick={(e) => {
        if (modalRef.current === e.target) return onClose?.();
      }}
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
