

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosConfig } from '../../../config/axiosConfig';

const deleteTodo = (id: number) => {
  return axiosConfig.delete(`/todos/${id}`);
};

export const useDeleteTodo = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
