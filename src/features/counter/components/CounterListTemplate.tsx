import Link from 'next/link';
import { FC } from 'react';

import { CounterList } from './';

const counters = [
  {id: 1, label: 'カウンター1', value: 0 },
  {id: 2, label: 'カウンター2', value: 0 },
  {id: 3, label: 'カウンター3', value: 0 },
];

export const CounterListTemplate: FC = () => {
  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
        <h2>カウンターリスト</h2>
        <CounterList initialCounters={counters || []} />
      </section>
    </>
  );
};
