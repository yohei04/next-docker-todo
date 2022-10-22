import { FC, useEffect, useRef } from 'react';

import { TodoItemEditing, TodoItemEditingState, TodoItemView } from '../';
import { TodoEntity } from '../../../../../__generated__';
import { useDisclosure } from '../../../../hooks/useDisclosure';

type Props = {
  todo: TodoEntity;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const { isOpen: isEditing, open, close } = useDisclosure();
  const ref = useRef<TodoItemEditingState>(null);

  // const hoge = ref.current?.fun;
  // const hoge = ref.current?.querySelector('input');

  // useEffect(() => {
  //   if (ref.current) {
  //     // start() has type inferrence here as well
  //     // ref.current.fun();
  //     // ref.current.value;
  //   }
  // }, []);

  const childFnc = () => {
    console.log(ref.current?.name);
    ref.current?.fun();
  };

  const nameFromChild = ref.current?.name;

  return (
    <li>
      <div>
        {isEditing ? (
          <TodoItemEditing ref={ref} todo={todo} closeEditing={close} />
        ) : (
          <TodoItemView todo={todo} openEditing={open} />
        )}
      </div>
      <button onClick={childFnc}>チャイルドファンク </button>
      <h1>{nameFromChild}</h1>
    </li>
  );
};
