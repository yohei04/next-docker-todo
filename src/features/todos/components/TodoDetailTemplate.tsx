import Link from 'next/link';
import { FC } from 'react';

export const TodoDetailTemplate: FC = () => {
  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
        <h2>TODO詳細</h2>
      </section>
    </>
  );
};
