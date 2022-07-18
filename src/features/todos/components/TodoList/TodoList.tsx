import { FC } from 'react';

import { TodoItem } from '../';

export type TodoEntity = {
  id: number;
  title: string;
  completed: boolean;
};

const todos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false,
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false,
  },
];

export const TodoList: FC = () => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
