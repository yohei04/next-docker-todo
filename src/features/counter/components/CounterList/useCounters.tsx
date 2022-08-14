import { FC, useCallback, useMemo, useState } from 'react';

export type TCounter = {
  label: string;
  value: number;
};

type TUseCounters = {
  counters: TCounter[];
  countSum: number;
  increment: (index: number) => void;
  decrement: (index: number) => void;
  incrementByTwo: (index: number) => void;
};

export const useCounters = (initialCounters: TCounter[]): TUseCounters => {
  const [counters, setCounters] = useState<TCounter[]>(initialCounters);

  const countSum = useMemo(() => counters.reduce((acc, cur) => acc + cur.value, 0), [counters]);

  // strictモードでも正しく動く
  const increment = useCallback((index: number) => {
    setCounters((prev) => {
      const newCounters = prev.map((counter, i) => {
        if (i === index) {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }
        return counter;
      });
      return newCounters;
    });
  }, []);

  const decrement = useCallback((index: number) => {
    setCounters((prev) => {
      // strictモードでも正しく動く
      const newCounters = structuredClone(prev);
      // strictモードで壊れる（shallow copyでミュータブルなため）
      // const newCounters = [...prev];
      newCounters[index].value -= 1;
      return newCounters;
    });
  }, []);

  const incrementByTwo = useCallback((index: number) => {
    setCounters((prev) => {
      const newCounters = prev.map((counter, i) => {
        if (i === index) {
          return {
            ...counter,
            value: counter.value + 2,
          };
        }
        return counter;
      });
      return newCounters;
    });
  }, []);

  // const [value, setValue] = useState(initialValue);
  // const increment = useCallback(() => setValue((prev) => prev + 1), []);
  // const incrementByTwo = useCallback(() => setValue((prev) => prev + 2), []);
  // const decrement = useCallback(() => setValue((prev) => prev - 1), []);

  // const counterItem = (
  //   <>
  //     <h3>共通タイトル</h3>
  //     <div>{initialLabel}</div>
  //     <div>{value}</div>
  //     <div>
  //       <button onClick={increment}>+</button>
  //       <button onClick={decrement}>-</button>
  //       {incrementByTwo && <button onClick={incrementByTwo}>+2</button>}
  //     </div>
  //   </>
  // );

  return {
    counters,
    countSum,
    increment,
    decrement,
    incrementByTwo,
  };
};
