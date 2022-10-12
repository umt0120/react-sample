import React, { memo, useState } from "react";

interface FizzProps {
  isFizz: boolean;
}

const Fizz: (props: FizzProps) => JSX.Element = (props: FizzProps) => {
  const { isFizz } = props;
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Fizzが再描画されました, isFizz=${isFizz}`);
  return <span>{isFizz ? "Fizz" : ""}</span>;
};

interface BuzzProps {
  isBuzz: boolean;
  onClick: () => void;
}

// eslint-disable-next-line react/display-name
const Buzz = memo<BuzzProps>((props) => {
  // eslint-disable-next-line react/prop-types
  const { isBuzz, onClick } = props;
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Buzzが再描画されました, isBuzz=${isBuzz}`);
  return <span onClick={onClick}>{isBuzz ? "Buzz" : ""}</span>;
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onBuzzClick = () => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`Buzzがクリックされました, isBuzz=${isBuzz}`);
  };

  console.log(`Parentが再描画されました, count=${count}`);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
      </p>
    </div>
  );
};
