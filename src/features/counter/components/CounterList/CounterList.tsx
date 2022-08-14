import { FC } from 'react';

import { CounterItem, CounterItem2, TCounter, useCounters } from '../';

type Props = {
  initialCounters: TCounter[];
};

export const CounterList: FC<Props> = ({ initialCounters }) => {
  const { counters, countSum, increment, decrement, incrementByTwo, addCounter, deleteCounter } =
    useCounters(initialCounters);

  return (
    <div>
      <h2>合計値: {countSum}</h2>
      <button onClick={addCounter}>カウンターを追加</button>
      {counters.map((counter, index) => (
        <CounterItem2
          key={counter.label}
          counter={counter}
          increment={() => increment(index)}
          decrement={() => decrement(index)}
          incrementByTwo={index === 0 ? () => incrementByTwo(index) : undefined}
          deleteCounter={deleteCounter}
        />
      ))}

      {/* <CounterItem>カウンター1</CounterItem>
      <CounterItem>
        {({ incrementByTwo }) => (
          <>
            <h5>カウンター2</h5>
            <button onClick={incrementByTwo}>+2</button>
          </>
        )}
      </CounterItem> */}
    </div>
  );
};
