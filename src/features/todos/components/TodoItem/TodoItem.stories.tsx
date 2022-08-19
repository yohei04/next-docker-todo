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
