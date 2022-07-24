import { ChangeEvent, FC, useCallback, useState } from 'react';

import { TodoEntity } from '../../../../../__generated__';
import { useUpdateTodo } from '../../api/updateTodo';

type Props = {
  todo: TodoEntity;
  closeEditing: () => void;
};

export const TodoItemEditing: FC<Props> = ({ todo, closeEditing }) => {
  const [name, setName] = useState(todo.name);

  const { mutate: updateNameMutate } = useUpdateTodo(todo.id, {
    ...todo,
    name,
  });

  const handleChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  );

  const handleSubmitName = useCallback(() => {
    updateNameMutate();
    closeEditing();
  }, [updateNameMutate, closeEditing]);

  return (
    <div>
      <input type="text" value={name} onChange={handleChangeName} />
      <br />
      <button onClick={handleSubmitName}>更新</button>
      <button onClick={closeEditing}>キャンセル</button>
    </div>
  );
};
