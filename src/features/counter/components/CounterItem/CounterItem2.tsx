import { FC } from 'react';

type Props = {
  label: string;
  value: number;
  increment: () => void;
  decrement: () => void;
  incrementByTwo?: () => void;
};

export const CounterItem2: FC<Props> = ({ label, value, increment, decrement, incrementByTwo }) => {
  return (
    <>
      <h3>共通タイトル</h3>
      <div>{label}</div>
      <div>{value}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {incrementByTwo && <button onClick={incrementByTwo}>+2</button>}
      </div>
    </>
  );
};
