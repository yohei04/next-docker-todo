import { FC, ReactNode, useCallback, useState } from 'react';

type Props = {
  children: ReactNode;
};

export const TodoWrapper: FC<Props> = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  const decrement = useCallback(() => setCounter((prev) => prev - 1), []);

  return (
    <>
      <h3>共通タイトル</h3>
      {children}
      <div>{counter}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
