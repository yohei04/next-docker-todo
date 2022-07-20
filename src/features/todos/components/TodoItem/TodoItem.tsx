import { FC } from 'react';

import { TodoEntity } from '../';

type Props = {
  todo: TodoEntity;
  deleteTodo: (id: number) => void;
};

export const TodoItem: FC<Props> = ({ todo, deleteTodo }) => {
  return (
    <li>
      <div>
        <p>
          {todo.id}
          {todo.title}
        </p>
        <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
    </li>
  );
};
