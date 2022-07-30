import { FC } from 'react';

import { CounterItem, CounterItem2, useCounters } from '../';

export const CounterList: FC = () => {
  const { counters, countNum, increment, decrement } = useCounters();

  return (
    <div>
      <h2>{countNum}</h2>
      {counters.map((counter, index) => (
        <CounterItem2
          key={counter.label}
          label={counter.label}
          value={counter.value}
          increment={() => increment(index)}
          decrement={() => decrement(index)}
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
