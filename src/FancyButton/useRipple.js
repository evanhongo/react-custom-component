import { useEffect } from "react";

export default function useRipple(ref) {
  function ripple(e) {
    const scrollTop = document.documentElement.scrollTop;
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop - scrollTop;
    const ripple = document.createElement("span");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");
    e.target.appendChild(ripple);

    window.setTimeout(() => {
      ripple.remove();
    }, 1000);
  }

  useEffect(() => {
    let obj;
    if (ref?.current) {
      obj = ref.current;
      obj.addEventListener("click", ripple);
    }

    return () => {
      if (obj) obj.removeEventListener("click", ripple);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [() => ref.current]);
}
