import { useCallback, useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  const incrementByTwo = useCallback(() => setCounter((prev) => prev + 2), []);
  const decrement = useCallback(() => setCounter((prev) => prev - 1), []);

  return {
    counter,
    increment,
    incrementByTwo,
    decrement,
  };
};
