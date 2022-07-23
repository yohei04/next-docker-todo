import { FC } from 'react';

import { TodoListPresentation } from '../';
import { useTodos } from '../../api/getTodos';

export const TodoListContainer: FC = () => {
  const { data } = useTodos();

  return <TodoListPresentation initialTodos={data!} />;
};
