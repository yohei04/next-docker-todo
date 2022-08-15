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
    <div id={`counter-${counter.id}`}>
      <h3>共通タイトル</h3>
      <div>{counter.label}</div>
      <div aria-label={`counter-value-${counter.id}`}>{counter.value}</div>
      <div>
        <button aria-label={`counter-increment-${counter.id}`} onClick={increment}>
          +
        </button>
        <button aria-label={`counter-decrement-${counter.id}`} onClick={decrement}>
          -
        </button>
        {incrementByTwo && <button onClick={incrementByTwo}>+2</button>}
      </div>
      <button onClick={() => deleteCounter(counter.id)}>削除</button>
    </div>
  );
};
