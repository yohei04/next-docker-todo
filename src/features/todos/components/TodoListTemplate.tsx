import Link from 'next/link';
import { FC, Suspense } from 'react';

import { useTodos } from '../api/getTodos';
import { TodoListContainer } from './';

export const TodoListTemplate: FC = () => {
  const { data } = useTodos();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
        <h2>TODOリスト</h2>
        <Suspense fallback={<h1>ローディング</h1>}>
          <TodoListContainer initialTodos={data} />
        </Suspense>
      </section>
    </>
  );
};
