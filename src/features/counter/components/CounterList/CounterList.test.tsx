import { render, screen } from '@testing-library/react';

import { CounterList } from '../';
import { userEventSetup } from '../../../../utils/test/userEventSetup';

const dummyCounters = [
  { id: 1, label: 'カウンター1', value: 0 },
  { id: 2, label: 'カウンター2', value: 0 },
];

global.structuredClone = jest.fn((val) => {
  return JSON.parse(JSON.stringify(val));
});

test('+ボタンを1回押下するとカウンター内の値が1になること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const incrementButton = screen.getByRole('button', { name: 'counter-increment-1' });
  await user.click(incrementButton);
  const counterItemValue = screen.getByLabelText('counter-value-1');
  expect(counterItemValue).toHaveTextContent('1');
});

test('-ボタンを1回押下するとカウンター内の値が-1になること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const decrementButton = screen.getByRole('button', { name: 'counter-decrement-1' });
  await user.click(decrementButton);
  const counterItemValue = screen.getByLabelText('counter-value-1');
  expect(counterItemValue).toHaveTextContent('-1');
});

test('はじめは合計値が0であること', async () => {
  render(<CounterList initialCounters={dummyCounters} />);
  expect(screen.getByText('合計値: 0')).toBeInTheDocument();
});

test('+ボタンを1回押下すると合計値が1になること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const incrementButton = screen.getByRole('button', { name: 'counter-increment-1' });
  await user.click(incrementButton);
  expect(screen.getByText('合計値: 1')).toBeInTheDocument();
});

test('2つのカウンターの+ボタンを1回ずつ押下すると合計値が2になること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const firstIncrementButton = screen.getByRole('button', { name: 'counter-increment-1' });
  const secondIncrementButton = screen.getByRole('button', { name: 'counter-increment-2' });
  await user.click(firstIncrementButton);
  await user.click(secondIncrementButton);
  expect(screen.getByText('合計値: 2')).toBeInTheDocument();
});

test('カウンター追加ボタンを押すとカウンター自体が増えること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const addButton = screen.getByRole('button', { name: 'カウンターを追加' });
  await user.click(addButton);
  const counters = screen.getAllByRole('listitem');
  expect(counters).toHaveLength(3);
});

test('カウンター削除ボタンを押すとカウンター自体が減ること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const deleteButtons = screen.getAllByRole('button', { name: '削除' });
  await user.click(deleteButtons[0]);
  const counters = screen.getAllByRole('listitem');
  expect(counters).toHaveLength(1);
});
