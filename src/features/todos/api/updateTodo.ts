import axios from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TodoEntity, UpdateTodoDto } from '../../../../__generated__';
import { BASE_URL } from '../../../constants/api/baseUrl';

const updateTodo = (id: number, data: UpdateTodoDto): Promise<TodoEntity> => {
  return axios.patch(`${BASE_URL}/todos/${id}`, data);
};

export const useUpdateTodo = (id: number, data: UpdateTodoDto) => {
  const queryClient = useQueryClient();

  return useMutation(() => updateTodo(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
