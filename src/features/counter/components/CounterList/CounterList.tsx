import { FC } from 'react';

import { CounterItem, CounterItem2, useCounters } from '../';

export const CounterList: FC = () => {
  const { counters, countNum, increment, decrement, incrementByTwo } = useCounters();

  return (
    <div>
      <h2>合計値: {countNum}</h2>
      {counters.map((counter, index) => (
        <CounterItem2
          key={counter.label}
          label={counter.label}
          value={counter.value}
          increment={() => increment(index)}
          decrement={() => decrement(index)}
          incrementByTwo={index === 0 ? () => incrementByTwo(index) : undefined}
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
