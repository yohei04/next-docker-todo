import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

import { TodoEntity } from '../../../../__generated__';
import { BASE_URL } from '../../../constants/api/baseUrl';

const getTodos = async (): Promise<TodoEntity[]> => {
  const res = await axios.get(`${BASE_URL}/todos`);
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.data;
};

export const useTodos = () => {
  return useQuery(['todos'], getTodos, {
    suspense: true,
  });
};
