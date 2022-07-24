import { FC } from 'react';

type Props = {
  handleFilterAll: () => void;
  handleFilterActive: () => void;
  handleFilterCompleted: () => void;
};

export const FilterButtons: FC<Props> = ({
  handleFilterAll,
  handleFilterActive,
  handleFilterCompleted,
}) => {
  return (
    <div>
      <button onClick={handleFilterAll}>All</button>
      <button onClick={handleFilterActive}>Active</button>
      <button onClick={handleFilterCompleted}>Completed</button>
    </div>
  );
};
