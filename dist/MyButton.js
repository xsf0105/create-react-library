import React from "react";
import "./MyButton.css";

var MyButton = function MyButton(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return React.createElement(
    "button",
    { onClick: onClick },
    text,
    " ",
    React.createElement(
      "b",
      null,
      "npm"
    )
  );
};

export default MyButton;