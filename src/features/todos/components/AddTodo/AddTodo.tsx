import { FC, useState } from 'react';

import { useCreateTodo } from '../../api/createTodo';

type Props = {
  // addTodo: (value: string) => void;
};

export const AddTodo: FC<Props> = () => {
  const [value, setValue] = useState('');

  const { mutate } = useCreateTodo({ name: value, completed: false });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => mutate()}>追加</button>
    </div>
  );
};
