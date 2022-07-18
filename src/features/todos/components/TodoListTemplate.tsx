import Link from 'next/link';
import { FC } from 'react';

import { TodoList } from './';

export const TodoListTemplate: FC = () => {
  return (
    <section>
      <Link href="/">トップへ</Link>
      <h2>TODOリスト</h2>
      <TodoList />
    </section>
  );
};
