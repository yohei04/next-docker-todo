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
    console.log(ref.current?.[`name-${filteredTodos?.[0]?.id}`]);
    // ref.current?.fun();
  };

  const nameFromChild = {
    0: ref.current?.[`name-${filteredTodos?.[0]?.id}`] ?? '',
    1: ref.current?.[`name-${filteredTodos?.[1]?.id}`] ?? '',
  };

  useEffect(() => {}, );

  console.log('nameFromChild[0]', nameFromChild[0]);
  console.log('nameFromChild[1]', nameFromChild[1]);
  console.log({ ref });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        // <TodoItem key={todo.id} todo={todo} />
        <TodoItemEditing key={todo.id} ref={ref} todo={todo} closeEditing={() => undefined} />
      ))}
      <h1 onClick={childFunc}>たいとる：{nameFromChild[0] + nameFromChild[1]}</h1>
    </ul>
  );
};
