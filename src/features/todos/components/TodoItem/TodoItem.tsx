import { FC } from 'react';

import { TodoEntity } from '../../../../../__generated__';

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
          {todo.name}
        </p>
        <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
    </li>
  );
};
