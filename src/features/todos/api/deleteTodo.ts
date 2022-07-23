import axios from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BASE_URL } from '../../../constants/api/baseUrl';

const deleteTodo = (id: number) => {
  return axios.delete(`${BASE_URL}/todos/${id}`);
};

export const useDeleteTodo = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
