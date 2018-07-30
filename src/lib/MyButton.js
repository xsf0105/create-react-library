import React from "react";
import "./MyButton.css";

const MyButton = ({ text, type, onClick }) => (
  <button
    className={type === "primary" ? "btn-primary btn" : "btn"}
    onClick={e => onClick && onClick("hello")}
  >
    <span>{text} NPM</span>
  </button>
);

export default MyButton;
