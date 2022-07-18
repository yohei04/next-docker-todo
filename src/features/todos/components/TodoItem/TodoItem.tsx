import { FC } from 'react';

import { TodoEntity } from '../';

type Props = {
  todo: TodoEntity;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <li>
      <div>
        <p>{todo.title}</p>
      </div>
    </li>
  );
};
