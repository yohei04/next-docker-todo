import { FC, useCallback, useMemo, useState } from 'react';

import { CounterItem, CounterItem2, TCounter, useCounters } from '../';

type Props = {
  initialCounters: TCounter[];
};

export const CounterList: FC<Props> = ({ initialCounters }) => {
  const { value: firstValue, counterItem: firstCounterItem } = useCounters(initialCounters[0]);
  const { value: secondValue, counterItem: secondCounterItem } = useCounters(initialCounters[1]);

  const countNum = useMemo(() => firstValue + secondValue, [firstValue, secondValue]);

  // const items = initialCounters.map((initialCounter) => useCounters(initialCounter));
  // const countNum = useMemo(() => {
  //   return items.reduce((acc, cur) => acc + cur.counter, 0);
  // }, [items]);

  return (
    <div>
      <h2>合計値: {countNum}</h2>
      {/* {counters.map((counter, index) => ( */}
      {firstCounterItem}
      {secondCounterItem}

      {/* {items.map((item) => {
        return <item.CounterItem key={item.label} />;
      })} */}

      {/* ))} */}

      {/* {counters.map((counter, index) => (
        <CounterItem2
          key={counter.label}
          label={counter.label}
          value={counter.value}
          increment={() => increment(index)}
          decrement={() => decrement(index)}
          incrementByTwo={index === 0 ? () => incrementByTwo(index) : undefined}
        />
      ))} */}

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
