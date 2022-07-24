import { useQuery } from '@tanstack/react-query';

import { TodoEntity } from '../../../../__generated__';
import { axiosConfig } from '../../../config/axiosConfig';

const getTodos = async (): Promise<TodoEntity[]> => {
  const res = await axiosConfig.get('/todos');
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.data;
};

export const useTodos = () => {
  return useQuery(['todos'], getTodos, {
    suspense: true,
  });
};
