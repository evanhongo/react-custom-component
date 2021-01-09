import React, { useEffect, useRef } from "react";
import "../../css/ScrollBar.scss";

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
      <div className="progressBar" ref={progressBar} style={{ width }}></div>
      <div className="scrollPath"></div>
    </div>
  );
}
