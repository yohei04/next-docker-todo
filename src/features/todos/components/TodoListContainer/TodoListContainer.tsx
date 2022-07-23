import { FC } from 'react';

import { TodoListPresentation } from '../';
import { useTodos } from '../../api/getTodos';

export const TodoListContainer: FC = () => {
  const { data } = useTodos();

  // if (!data) return <h1>Loading...</h1>;

  return <TodoListPresentation todos={data!} />;
};
