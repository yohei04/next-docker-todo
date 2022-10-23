import { FC } from 'react';

import { TodoItem, useFilterTodos } from '../';

export const TodoList: FC = () => {
  const { filteredTodos } = useFilterTodos();

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
