import Link from 'next/link';
import { FC } from 'react';

import { CounterList } from './';

export const CounterListTemplate: FC = () => {
  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
        <h2>カウンターリスト</h2>
        <CounterList />
      </section>
    </>
  );
};
