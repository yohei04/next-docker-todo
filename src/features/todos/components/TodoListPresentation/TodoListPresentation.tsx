import { FC, useState } from 'react';

import { AddTodo, TodoList } from '../';
import { TodoEntity } from '../../../../../__generated__';

type Props = {
  todos: TodoEntity[];
};

export const TodoListPresentation: FC<Props> = ({ todos }) => {
  return (
    <>
      <AddTodo />
      <TodoList todos={todos} />
    </>
  );
};
