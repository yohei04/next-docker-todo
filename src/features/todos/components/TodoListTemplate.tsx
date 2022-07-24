import Link from 'next/link';
import { FC, Suspense } from 'react';

import { AddTodo, FilterLinks, TodoList } from './';

export const TodoListTemplate: FC = () => {
  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
        <h2>TODOリスト</h2>
        <AddTodo />
        <FilterLinks />
        <Suspense fallback={<h1>ローディング</h1>}>
          <TodoList />
        </Suspense>
      </section>
    </>
  );
};
