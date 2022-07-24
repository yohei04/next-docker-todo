import { FC, useMemo, useState } from 'react';

import { FILTER_NAMES, FilterButtons, TFilterName, TodoItem } from '../';
import { useTodos } from '../../api/getTodos';

export const TodoList: FC = () => {
  const { data: todos } = useTodos();

  const [filterName, setFilterName] = useState<TFilterName>(FILTER_NAMES.ALL);

  const filteredTodos = useMemo(() => {
    if (!todos) return [];
    if (filterName === FILTER_NAMES.ACTIVE) {
      return todos.filter((todo) => !todo.completed);
    }
    if (filterName === FILTER_NAMES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  }, [filterName, todos]);

  return (
    <div>
      <FilterButtons setFilterName={setFilterName} />
      <ul>
        {filteredTodos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
