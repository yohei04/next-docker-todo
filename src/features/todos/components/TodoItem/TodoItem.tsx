import clsx from 'clsx';
import { ChangeEvent, FC, useCallback, useState } from 'react';

import { TodoEntity } from '../../../../../__generated__';
import { useDeleteTodo } from '../../api/deleteTodo';
import { useUpdateTodo } from '../../api/updateTodo';
import style from './TodoItem.module.css';

type Props = {
  todo: TodoEntity;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todo.name);

  const openEditing = useCallback(() => setIsEditing(true), []);
  const closeEditing = useCallback(() => setIsEditing(false), []);

  const { mutate: updateCompleteMutate } = useUpdateTodo(todo.id, {
    ...todo,
    completed: !todo.completed,
  });
  const { mutate: updateNameMutate } = useUpdateTodo(todo.id, {
    ...todo,
    name,
  });
  const { mutate: deleteTodoMutate } = useDeleteTodo(todo.id);

  const handleChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  );

  const handleSubmitName = useCallback(() => {
    updateNameMutate();
    closeEditing();
  }, [updateNameMutate, closeEditing]);

  return (
    <li>
      <div>
        {isEditing ? (
          <div>
            <input type="text" value={name} onChange={handleChangeName} />
            <br />
            <button onClick={handleSubmitName}>更新</button>
            <button onClick={closeEditing}>キャンセル</button>
          </div>
        ) : (
          <div>
            <p
              className={clsx(style.name, { [style.completed]: todo.completed })}
              onClick={() => updateCompleteMutate()}
            >
              {todo.id}
              {todo.name}
            </p>
            <button onClick={openEditing}>編集</button>
            <button onClick={() => deleteTodoMutate()}>削除</button>
          </div>
        )}
      </div>
    </li>
  );
};
