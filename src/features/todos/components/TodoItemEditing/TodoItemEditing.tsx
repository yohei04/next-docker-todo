import {
  ChangeEvent,
  FC,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';

import { TodoEntity } from '../../../../../__generated__';
import { useUpdateTodo } from '../../api/updateTodo';

type Props = {
  todo: TodoEntity;
  closeEditing: () => void;
};
useImperativeHandle;
useImperativeHandle;

export type TodoItemEditingState = {
  [x: string]: string;
  // fun: () => void;
};

export const TodoItemEditing = forwardRef<TodoItemEditingState, Props>(
  ({ todo, closeEditing }, ref) => {
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

    useImperativeHandle(
      ref,
      () => {
        return {
          [`name-${todo.id}`]: name,
          // fun: () => console.log('コンソールとして出力'),
        };
      },
      [name, todo.id]
    );

    return (
      <div>
        <input
          // ref={ref}
          type="text"
          value={name}
          aria-label="edit-todo-input"
          onChange={handleChangeName}
        />
        <br />
        <button onClick={handleSubmitName}>更新</button>
        <button onClick={closeEditing}>キャンセル</button>
      </div>
    );
  }
);

TodoItemEditing.displayName = 'TodoItemEditing';
