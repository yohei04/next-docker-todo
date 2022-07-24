import axios from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CreateTodoDto, TodoEntity } from '../../../../__generated__';
import { axiosConfig } from '../../../config/axiosConfig';

const createTodo = (data: CreateTodoDto): Promise<TodoEntity> => {
  return axiosConfig.post('/todos', data);
};

export const useCreateTodo = (data: CreateTodoDto) => {
  const queryClient = useQueryClient();

  return useMutation(() => createTodo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
