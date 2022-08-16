import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { CounterList } from '../';

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

export default {
  component: CounterList,
} as ComponentMeta<typeof CounterList>;

export const Default: ComponentStoryObj<typeof CounterList> = {
  args: {
    initialCounters: [{ id: 1, label: 'カウンター1', value: 0 }],
  },
};

export const IncrementCounter: ComponentStoryObj<typeof CounterList> = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const incrementButton = canvas.getByRole('button', { name: 'counter-increment-1' });
    await userEvent.click(incrementButton);
    const counterItemValue = canvas.getByLabelText('counter-value-1');
    expect(counterItemValue).toHaveTextContent('0');
  },
};
