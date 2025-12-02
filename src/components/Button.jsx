import React from "react";

const Button = (props) => {
  return (
    <button
      className="button"
      style={{
        background: "red",
        color: "pink",
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
