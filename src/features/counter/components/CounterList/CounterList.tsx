import { FC, useRef } from 'react';

import {
  CounterItem,
  CounterItem2,
  CounterItemWithUseImperativeHandle,
  TCounter,
  useCounters,
  UseImperativeHandleRef,
} from '../';

type Props = {
  initialCounters: TCounter[];
};

export const CounterList: FC<Props> = ({ initialCounters }) => {
  const { counters, countSum, increment, decrement, incrementByTwo, addCounter, deleteCounter } =
    useCounters(initialCounters);

  // useImperativeHandle関連
  const ref1 = useRef<UseImperativeHandleRef>(null);
  const ref2 = useRef<UseImperativeHandleRef>(null);

  const onClick1 = () => {
    ref1.current?.incrementByTwo();
  };
  const onClick2 = () => {
    ref2.current?.incrementByTwo();
  };
  const onFocus1 = () => {
    ref1.current?.focus();
  };

  const divs = ref1.current?.querySelectorAll('div');
  const counter = ref1.current?.counter;

  console.log({ divs, counter });

  return (
    <div>
      {/* <h2>合計値: {countSum}</h2>
      <button onClick={addCounter}>カウンターを追加</button>
      <ul>
        {counters.map((counter, index) => (
          <li key={counter.label}>
            <CounterItem2
              counter={counter}
              increment={() => increment(index)}
              decrement={() => decrement(index)}
              incrementByTwo={index === 0 ? () => incrementByTwo(index) : undefined}
              deleteCounter={deleteCounter}
            />
          </li>
        ))}
      </ul> */}

      {/* <CounterItem>カウンター1</CounterItem>
      <CounterItem>
        {({ incrementByTwo }) => (
          <>
            <h5>カウンター2</h5>
            <button onClick={incrementByTwo}>+2</button>
          </>
        )}
      </CounterItem> */}

      <button onClick={onClick1}>外から1にプラス</button>
      <button onClick={onFocus1}>1にフォーカス</button>
      <CounterItemWithUseImperativeHandle ref={ref1}>
        <h5>チルドレン1</h5>
        <div>親のカウント：{counter}</div>
        <button onClick={onClick1}>+2</button>
      </CounterItemWithUseImperativeHandle>

      <CounterItemWithUseImperativeHandle ref={ref2}>
        <h5>チルドレン2</h5>
        <button onClick={onClick2}>+2</button>
      </CounterItemWithUseImperativeHandle>
    </div>
  );
};
