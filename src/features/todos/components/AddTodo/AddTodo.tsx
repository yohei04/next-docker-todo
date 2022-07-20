import { FC, useState } from 'react';

type Props = {
  addTodo: (value: string) => void;
};

export const AddTodo: FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => addTodo(value)}>追加</button>
    </div>
  );
};
