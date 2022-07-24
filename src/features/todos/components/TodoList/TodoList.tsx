import { FC } from 'react';

import { TodoItem } from '../';
import { useTodos } from '../../api/getTodos';

export const TodoList: FC = () => {
  const { data: todos } = useTodos();

  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
