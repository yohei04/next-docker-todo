import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { CounterList } from '../';

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

export default {
  component: CounterList,
} as ComponentMeta<typeof CounterList>;

export const Default: ComponentStoryObj<typeof CounterList> = {
  args: {
    initialCounters: [
      { id: 1, label: 'カウンター1', value: 0 },
      { id: 2, label: 'カウンター2', value: 0 },
    ],
  },
};

export const IncrementCounter: ComponentStoryObj<typeof CounterList> = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const incrementButton = canvas.getByRole('button', { name: 'counter-increment-1' });
    await userEvent.click(incrementButton);
    const counterItemValue = canvas.getByLabelText('counter-value-1');
    expect(counterItemValue).toHaveTextContent('1');
  },
};

// export const DecrementCounter: ComponentStoryObj<typeof CounterList> = {
//   ...Default,
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const decrementButton = canvas.getByRole('button', { name: 'counter-decrement-1' });
//     await userEvent.click(decrementButton);
//     const counterItemValue = canvas.getByLabelText('counter-value-1');
//     expect(counterItemValue).toHaveTextContent('-1');
//   },
// };

export const AddCounter: ComponentStoryObj<typeof CounterList> = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const addButton = canvas.getByRole('button', { name: 'カウンターを追加' });
    await userEvent.click(addButton);
    const counters = canvas.getAllByRole('listitem');
    expect(counters).toHaveLength(3);
  },
};

export const DeleteCounter: ComponentStoryObj<typeof CounterList> = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deleteButtons = canvas.getAllByRole('button', { name: '削除' });
    await userEvent.click(deleteButtons[0]);
    const counters = canvas.getAllByRole('listitem');
    expect(counters).toHaveLength(1);
  },
};
