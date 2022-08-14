import { FC } from 'react';

import { TCounter } from '../CounterList/useCounters';

type Props = {
  counter: TCounter;
  increment: () => void;
  decrement: () => void;
  incrementByTwo?: () => void;
  deleteCounter: (id: number) => void;
};

export const CounterItem2: FC<Props> = ({
  counter,
  increment,
  decrement,
  incrementByTwo,
  deleteCounter,
}) => {
  return (
    <div>
      <h3>共通タイトル</h3>
      <div>{counter.label}</div>
      <div>{counter.value}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {incrementByTwo && <button onClick={incrementByTwo}>+2</button>}
      </div>
      <button onClick={() => deleteCounter(counter.id)}>削除</button>
    </div>
  );
};
