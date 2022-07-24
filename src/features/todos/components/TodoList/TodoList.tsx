import { FC } from 'react';

import { FilterButtons, TodoItem, useFilterTodos } from '../';
import { useTodos } from '../../api/getTodos';

export const TodoList: FC = () => {
  const { data: todos } = useTodos();

  const { filteredTodos, ...handlers } = useFilterTodos(todos);

  return (
    <div>
      <FilterButtons {...handlers} />
      <ul>
        {filteredTodos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
