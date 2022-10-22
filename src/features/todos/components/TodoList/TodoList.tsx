import { FC, useEffect, useRef } from 'react';

import {
  TodoItem,
  TodoItemEditing,
  TodoItemEditingState,
  useFilterTodos,
} from '../';

export const TodoList: FC = () => {
  const { filteredTodos } = useFilterTodos();

  const ref = useRef<TodoItemEditingState>(null);

  const childFunc = () => {
    console.log(ref.current?.childValue);
    ref.current?.fun();
  };

  const childValue = ref.current?.childValue;

  return (
    <ul>
      {filteredTodos.map((todo) => (
        // <TodoItem key={todo.id} todo={todo} />
        <TodoItemEditing key={todo.id} ref={ref} todo={todo} closeEditing={() => undefined} />
      ))}
      <h1 onClick={childFunc}>{childValue}</h1>
    </ul>
  );
};
