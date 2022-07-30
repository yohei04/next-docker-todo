import { useCallback, useMemo, useState } from 'react';

type TCounter = {
  label: string;
  value: number;
};

const initialCounters = [
  { label: 'カウンター1', value: 0 },
  { label: 'カウンター2', value: 0 },
  { label: 'カウンター3', value: 0 },
];

export const useCounters = () => {
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

  // strictモードで壊れる（ミュータブルなため）
  const decrement = useCallback((index: number) => {
    setCounters((prev) => {
      const newCounters = [...prev];
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
