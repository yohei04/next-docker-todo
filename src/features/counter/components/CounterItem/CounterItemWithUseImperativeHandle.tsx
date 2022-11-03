import React, {
  FC,
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export type UseImperativeHandleRef = {
  counter: number;
  incrementByTwo: () => void;
  focus: () => void;
  querySelectorAll: (tag: string) => void;
};

type Props = {
  children: ReactNode;
};

export const CounterItemWithUseImperativeHandle = forwardRef<UseImperativeHandleRef, Props>(
  ({ children }, ref) => {
    const [counter, setCounter] = useState(0);
    const increment = useCallback(() => setCounter((prev) => prev + 1), []);
    const incrementByTwo = useCallback(() => setCounter((prev) => prev + 2), []);
    const decrement = useCallback(() => setCounter((prev) => prev - 1), []);

    const divRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          counter,
          incrementByTwo,
          focus() {
            inputRef.current?.focus();
          },
          querySelectorAll: (tag: string) => divRef.current?.querySelectorAll(tag),
        };
      },
      [counter, incrementByTwo]
    );

    console.log('子供のcounter', counter);
    return (
      <div ref={divRef}>
        <h3>共通タイトル</h3>
        {children}
        <div>子のカウント：{counter}</div>
        <input ref={inputRef} type="text" placeholder="フォーカス" />
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    );
  }
);

CounterItemWithUseImperativeHandle.displayName = 'CounterItemWithUseImperativeHandle';
