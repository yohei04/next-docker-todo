import { Dispatch, FC, SetStateAction, useCallback } from 'react';

type Props = {
  setFilterName: Dispatch<SetStateAction<TFilterName>>;
};

export const FilterButtons: FC<Props> = ({ setFilterName }) => {
  const handleFilterAll = useCallback(() => setFilterName(FILTER_NAMES.ALL), [setFilterName]);
  const handleFilterActive = useCallback(() => setFilterName(FILTER_NAMES.ACTIVE), [setFilterName]);
  const handleFilterCompleted = useCallback(
    () => setFilterName(FILTER_NAMES.COMPLETED),
    [setFilterName]
  );

  return (
    <div>
      <button onClick={handleFilterAll}>All</button>
      <button onClick={handleFilterActive}>Active</button>
      <button onClick={handleFilterCompleted}>Completed</button>
    </div>
  );
};

export const FILTER_NAMES = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export type TFilterName = typeof FILTER_NAMES[keyof typeof FILTER_NAMES];
