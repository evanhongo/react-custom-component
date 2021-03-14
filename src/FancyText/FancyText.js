import React from "react";
import "../../css/FancyText.scss";

const FancyText = ({ as = "div", type, style, text }) =>
    React.createElement(as, { className: type, style, "data-text": text }, text)

export default FancyText;