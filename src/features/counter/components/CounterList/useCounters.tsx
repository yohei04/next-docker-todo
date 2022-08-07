import { useCallback, useMemo, useState } from 'react';

export type TCounter = {
  label: string;
  value: number;
};

type TUseCounters = {
  counters: TCounter[];
  countNum: number;
  increment: (index: number) => void;
  decrement: (index: number) => void;
  incrementByTwo: (index: number) => void;
};

export const useCounters = (initialCounters: TCounter[]): TUseCounters => {
  const [counters, setCounters] = useState<TCounter[]>(initialCounters);

  const countNum = useMemo(() => counters.reduce((acc, cur) => acc + cur.value, 0), [counters]);

  // strictモードでも正しく動く
  const increment = useCallback((index: number) => {
    console.log('run once?');
    setCounters((prev) => {
      console.log('run twice?');
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
    console.log('run once?');
    setCounters((prev) => {
      console.log('run twice?');
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

  return {
    counters,
    countNum,
    increment,
    decrement,
    incrementByTwo,
  };
};
