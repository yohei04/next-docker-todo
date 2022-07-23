import clsx from 'clsx';
import { FC, useState } from 'react';

import { TodoEntity } from '../../../../../__generated__';
import { useDeleteTodo } from '../../api/deleteTodo';
import { useUpdateTodo } from '../../api/updateTodo';
import style from './TodoItem.module.css';

type Props = {
  todo: TodoEntity;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const updateTodoMutation = useUpdateTodo(todo.id, { ...todo, completed: !todo.completed });
  const deleteTodoMutation = useDeleteTodo(todo.id);

  return (
    <li>
      <div>
        <p
          className={clsx(style.name, { [style.completed]: todo.completed })}
          onClick={() => updateTodoMutation.mutate()}
        >
          {todo.id}
          {todo.name}
        </p>
        <button onClick={() => deleteTodoMutation.mutate()}>X</button>
      </div>
    </li>
  );
};
