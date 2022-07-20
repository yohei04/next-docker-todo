import Link from 'next/link';
import { FC, useState } from 'react';

import { AddTodo, TodoList } from './';

export type TodoEntity = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodos = [
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

export const TodoListTemplate: FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (value: string) => {
    setTodos((prevState) => [
      ...prevState,
      { id: (prevState.at(-1)?.id || 0) + 1, title: value, completed: false },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <section>
      <Link href="/">トップへ</Link>
      <h2>TODOリスト</h2>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </section>
  );
};
