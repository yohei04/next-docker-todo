import { rest } from 'msw';
import { Toaster } from 'react-hot-toast';

import { expect, jest } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { TodoItem } from '../';
import { BASE_URL } from '../../../../config/baseUrl';

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
export default {
  component: TodoItem,
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof TodoItem>;

export const Default: ComponentStoryObj<typeof TodoItem> = {
  args: {
    todo: {
      id: 1,
      name: 'テストTodo',
      completed: false,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    },
  },
};

export const Editing: ComponentStoryObj<typeof TodoItem> = {
  ...Default,
  name: '編集中',
  parameters: {
    docs: {
      description: {
        story: '編集ボタン押下後は元のnameがinputに表示される',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const editButton = canvas.getByRole('button', { name: '編集' });
    await userEvent.click(editButton);
    const editInput = canvas.getByLabelText('edit-todo-input');
    expect(editInput).toHaveValue('テストTodo');
  },
};

const mockUpdateFn = jest.fn();
export const Update: ComponentStoryObj<typeof TodoItem> = {
  ...Default,
  parameters: {
    msw: {
      handlers: [
        rest.patch(`${BASE_URL}/todos/:id`, (req, res, ctx) => {
          mockUpdateFn();
          return res(ctx.json(Default.args?.todo));
        }),
      ],
    },
  },
  play: async (context) => {
    await Editing.play?.(context);
    const canvas = within(context.canvasElement);
    const editInput = canvas.getByLabelText('edit-todo-input');
    await userEvent.type(editInput, 'Todoを更新');
    expect(editInput).toHaveValue(`${Default.args?.todo?.name}Todoを更新`);

    const updateButton = canvas.getByRole('button', { name: '更新' });
    await userEvent.click(updateButton);

    const successToast = await canvas.findByText('変更しました');
    expect(successToast).toBeInTheDocument();
    await waitFor(() => expect(mockUpdateFn).toHaveBeenCalledTimes(1));
  },
};

const mockDeleteFn = jest.fn();
export const Delete: ComponentStoryObj<typeof TodoItem> = {
  ...Default,
  parameters: {
    msw: {
      handlers: [
        rest.delete(`${BASE_URL}/todos/:id`, (req, res, ctx) => {
          mockDeleteFn();
          return res(ctx.status(200));
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deleteButton = canvas.getByRole('button', { name: '削除' });
    await userEvent.click(deleteButton);
    const successToast = await canvas.findByText('削除しました');
    expect(successToast).toBeInTheDocument();
    await waitFor(() => expect(mockDeleteFn).toHaveBeenCalledTimes(1));
  },
};
