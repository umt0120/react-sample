import React, { useState } from "react";

interface CounterProps {
  initialValue: number;
}

const Counter: (props: CounterProps) => JSX.Element = (props: CounterProps) => {
  const { initialValue } = props;
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default Counter;
