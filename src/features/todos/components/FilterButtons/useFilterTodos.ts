import { useCallback, useMemo, useState } from 'react';

import { TodoEntity } from '../../../../../__generated__';

export const FILTER_NAMES = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export type TFilterName = typeof FILTER_NAMES[keyof typeof FILTER_NAMES];

export const useFilterTodos = (todos: TodoEntity[] | undefined) => {
  const [filterName, setFilterName] = useState<TFilterName>(FILTER_NAMES.ALL);

  const handleFilterAll = useCallback(() => setFilterName(FILTER_NAMES.ALL), [setFilterName]);
  const handleFilterActive = useCallback(() => setFilterName(FILTER_NAMES.ACTIVE), [setFilterName]);
  const handleFilterCompleted = useCallback(
    () => setFilterName(FILTER_NAMES.COMPLETED),
    [setFilterName]
  );

  const filteredTodos = useMemo(() => {
    if (!todos) return [];
    if (filterName === FILTER_NAMES.ACTIVE) {
      return todos.filter((todo) => !todo.completed);
    }
    if (filterName === FILTER_NAMES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  }, [filterName, todos]);

  return { filteredTodos, handleFilterAll, handleFilterActive, handleFilterCompleted };
};
