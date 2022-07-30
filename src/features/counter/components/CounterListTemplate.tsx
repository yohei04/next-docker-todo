import Link from 'next/link';
import { FC } from 'react';

import { CounterItem } from './';

export const CounterListTemplate: FC = () => {
  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
        <h2>カウンターリスト</h2>
        <CounterItem>カウンター1</CounterItem>
        <CounterItem>
          {({ incrementByTwo }) => (
            <>
              <h5>カウンター2</h5>
              <button onClick={incrementByTwo}>+2</button>
            </>
          )}
        </CounterItem>
      </section>
    </>
  );
};
