import { FC, useCallback, useState } from 'react';

import { TodoItemEditing, TodoItemView } from '../';
import { TodoEntity } from '../../../../../__generated__';

type Props = {
  todo: TodoEntity;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const openEditing = useCallback(() => setIsEditing(true), []);
  const closeEditing = useCallback(() => setIsEditing(false), []);

  return (
    <li>
      <div>
        {isEditing ? (
          <TodoItemEditing todo={todo} closeEditing={closeEditing} />
        ) : (
          <TodoItemView todo={todo} openEditing={openEditing} />
        )}
      </div>
    </li>
  );
};
