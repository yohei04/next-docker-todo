import Link from 'next/link';
import { FC, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { AddTodo, FilterLinks, TodoList } from './';

export const TodoListTemplate: FC = () => {
  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
      <Toaster />
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
