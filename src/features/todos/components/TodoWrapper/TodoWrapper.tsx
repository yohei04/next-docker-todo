import React, { FC, ReactNode, useCallback, useState } from 'react';

type RenderProps = {
  incrementByTwo?: () => void;
};

type Props = {
  children: ReactNode | ((renderProps: RenderProps) => ReactNode);
};

export const TodoWrapper: FC<Props> = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  const incrementByTwo = useCallback(() => setCounter((prev) => prev + 2), []);
  const decrement = useCallback(() => setCounter((prev) => prev - 1), []);

  const isRenderProps = typeof children === 'function';

  return (
    <>
      <h3>共通タイトル</h3>
      {isRenderProps ? children({ incrementByTwo }) : children}
      <div>{counter}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
