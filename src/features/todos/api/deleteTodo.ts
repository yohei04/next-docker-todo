import toast from 'react-hot-toast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosConfig } from '../../../config/axiosConfig';

const deleteTodo = (id: number) => {
  return axiosConfig.delete(`/todos/${id}`);
};

export const useDeleteTodo = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation(
    () =>
      toast.promise(deleteTodo(id), {
        loading: 'Loading',
        success: '削除しました',
        error: '削除に失敗しました',
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']);
      },
    }
  );
};
