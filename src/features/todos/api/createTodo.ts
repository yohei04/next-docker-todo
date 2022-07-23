import axios from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CreateTodoDto, TodoEntity } from '../../../../__generated__';
import { BASE_URL } from '../../../constants/api/baseUrl';

const createTodo = (data: CreateTodoDto): Promise<TodoEntity> => {
  return axios.post(`${BASE_URL}/todos`, data);
};

export const useCreateTodo = (data: CreateTodoDto) => {
  const queryClient = useQueryClient();

  return useMutation(() => createTodo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
