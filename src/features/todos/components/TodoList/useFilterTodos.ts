import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { useTodos } from '../../api/getTodos';

export const FILTER_NAMES = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export type TFilterName = typeof FILTER_NAMES[keyof typeof FILTER_NAMES];

export const useFilterTodos = () => {
  const { data: todos } = useTodos();
  const router = useRouter();
  const filter = router.query.filter as TFilterName;

  const filteredTodos = useMemo(() => {
    if (!todos) return [];
    if (filter === FILTER_NAMES.ACTIVE) {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === FILTER_NAMES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  }, [filter, todos]);

  return { filteredTodos };
};
