import { FC } from 'react';

import { TodoEntity, TodoItem } from '../';

type Props = {
  todos: TodoEntity[];
  deleteTodo: (id: number) => void;
};

export const TodoList: FC<Props> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};
