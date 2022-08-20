import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { TodoItem } from '../';

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

export default {
  component: TodoItem,
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

export const Update: ComponentStoryObj<typeof TodoItem> = {
  ...Default,
  play: async (context) => {
    await Editing.play?.(context);
    const canvas = within(context.canvasElement);
    const editInput = canvas.getByLabelText('edit-todo-input');
    await userEvent.type(editInput, '変更しました');
    expect(editInput).toHaveValue(`${Default.args?.todo?.name}変更しました`);
  },
};
