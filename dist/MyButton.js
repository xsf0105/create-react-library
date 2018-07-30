import React from "react";
import "./MyButton.css";

var MyButton = function MyButton(_ref) {
  var text = _ref.text,
      type = _ref.type,
      _onClick = _ref.onClick;
  return React.createElement(
    "button",
    {
      className: type === "primary" ? "btn-primary btn" : "btn",
      onClick: function onClick(e) {
        return _onClick && _onClick("hello");
      }
    },
    React.createElement(
      "span",
      null,
      text,
      " NPM"
    )
  );
};

export default MyButton;