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

  const increment = useCallback((index: number) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      newCounters[index].value += 1;
      return newCounters;
    });
  }, []);

  const decrement = useCallback((index: number) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      newCounters[index].value -= 1;
      return newCounters;
    });
  }, []);

  console.log({ counters });

  return {
    counters,
    countNum,
    increment,
    decrement,
  };
};
