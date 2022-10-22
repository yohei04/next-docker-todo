import toast from 'react-hot-toast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TodoEntity, UpdateTodoDto } from '../../../../__generated__';
import { axiosConfig } from '../../../config/axiosConfig';

const updateTodo = (id: number, data: UpdateTodoDto): Promise<TodoEntity> => {
  return axiosConfig.patch(`/todos/${id}`, data);
};

export const useUpdateTodo = (id: number, data: UpdateTodoDto) => {
  const queryClient = useQueryClient();

  return useMutation(
    () =>
      toast.promise(updateTodo(id, data), {
        loading: 'Loading',
        success: '変更しました',
        error: '変更に失敗しました',
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']);
      },
    }
  );
};
