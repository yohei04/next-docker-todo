import { rest } from 'msw';

import { TodoList } from '../';
import { BASE_URL } from '../../../../config/baseUrl';

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
export default {
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const testTodos = [
  {
    id: 1,
    name: 'テストTodo1',
    completed: false,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  },
  {
    id: 2,
    name: 'テストTodo2',
    completed: false,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  },
  {
    id: 3,
    name: 'テストTodo2',
    completed: false,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  },
];

export const Default: ComponentStoryObj<typeof TodoList> = {
  parameters: {
    nextRouter: {
      path: '/todos',
      query: {
        filter: 'all',
      },
    },
    msw: {
      handlers: [
        rest.get(`${BASE_URL}/todos`, (req, res, ctx) => {
          return res(ctx.json(testTodos));
        }),
      ],
    },
  },
};
