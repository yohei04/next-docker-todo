import { FC } from 'react';

import { TodoItemEditing, TodoItemView } from '../';
import { TodoEntity } from '../../../../../__generated__';
import { useDisclosure } from '../../../../hooks/useDisclosure';

type Props = {
  todo: TodoEntity;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const { isOpen: isEditing, open, close } = useDisclosure();

  return (
    <li>
      <div>
        {isEditing ? (
          <TodoItemEditing todo={todo} closeEditing={close} />
        ) : (
          <TodoItemView todo={todo} openEditing={open} />
        )}
      </div>
    </li>
  );
};
