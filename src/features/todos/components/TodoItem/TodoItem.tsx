import { FC } from 'react';

import { TodoEntity } from '../../../../../__generated__';
import { useDeleteTodo } from '../../api/deleteTodo';

type Props = {
  todo: TodoEntity;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const { mutate } = useDeleteTodo(todo.id);

  return (
    <li>
      <div>
        <p>
          {todo.id}
          {todo.name}
        </p>
        <button onClick={() => mutate()}>X</button>
      </div>
    </li>
  );
};
