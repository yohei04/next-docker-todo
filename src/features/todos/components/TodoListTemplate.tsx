import Link from 'next/link';
import { FC, Suspense } from 'react';

import { TodoListContainer } from './';

export const TodoListTemplate: FC = () => {
  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
        <h2>TODOリスト</h2>
        <Suspense fallback={<h1>ローディング</h1>}>
          <TodoListContainer />
        </Suspense>
      </section>
    </>
  );
};
