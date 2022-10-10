import React, { useReducer } from "react";

interface CounterProps {
  initialValue: number;
}

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

// 現在の値とActionをもとに処理を行うreducer
const reducer: (currentCount: number, action: Action) => number = (
  currentCount: number,
  action: Action
) => {
  switch (action) {
    case "INCREMENT":
      return currentCount + 1;
    case "DECREMENT":
      return currentCount - 1;
    case "DOUBLE":
      return currentCount * 2;
    case "RESET":
      return 0;
    default:
      return currentCount;
  }
};

const Counter: (props: CounterProps) => JSX.Element = (props: CounterProps) => {
  const { initialValue } = props;
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DOUBLE")}>x2</button>
      <button onClick={() => dispatch("RESET")}>RESET</button>
    </div>
  );
};

export default Counter;
