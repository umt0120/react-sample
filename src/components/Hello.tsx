import React from "react";

const Hello: () => JSX.Element = () => {
  const onClick: () => void = () => {
    alert("hello");
  };
  const text = "Hello, React";

  return <div onClick={onClick}>{text}</div>;
};

export default Hello;
