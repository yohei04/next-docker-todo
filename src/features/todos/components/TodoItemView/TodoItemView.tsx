import clsx from 'clsx';
import { FC } from 'react';

import { TodoEntity } from '../../../../../__generated__';
import { useDeleteTodo } from '../../api/deleteTodo';
import { useUpdateTodo } from '../../api/updateTodo';
import style from './TodoItemView.module.css';

type Props = {
  todo: TodoEntity;
  openEditing: () => void;
};

export const TodoItemView: FC<Props> = ({ todo, openEditing }) => {
  const { mutate: updateCompleteMutate } = useUpdateTodo(todo.id, {
    ...todo,
    completed: !todo.completed,
  });
  const { mutate: deleteTodoMutate } = useDeleteTodo(todo.id);

  return (
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
  );
};
