import { FC, useState } from 'react';

import { TodoList } from '../';
import { TodoEntity } from '../../../../../__generated__';
import { AddTodo } from '../AddTodo/AddTodo';

type Props = {
  todos: TodoEntity[];
};

export const TodoListPresentation: FC<Props> = ({ todos }) => {
  // const [todos, setTodos] = useState(initialTodos);

  // const addTodo = (value: string) => {
  //   setTodos((prevState) => [
  //     ...prevState,
  //     {
  //       id: (prevState.at(-1)?.id || 0) + 1,
  //       name: value,
  //       completed: false,
  //       createdAt: '',
  //       updatedAt: '',
  //     },
  //   ]);
  // };

  // const deleteTodo = (id: number) => {
  //   setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  // };

  return (
    <>
      <AddTodo />
      {/* <AddTodo addTodo={addTodo} /> */}
      <TodoList todos={todos} />
    </>
  );
};
