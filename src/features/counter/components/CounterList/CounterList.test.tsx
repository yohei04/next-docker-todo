import { render, screen } from '@testing-library/react';

import { CounterList } from '../';
import { userEventSetup } from '../../../../utils/test/userEventSetup';

const dummyCounters = [
  { id: 1, label: 'カウンター1', value: 0 },
  { id: 2, label: 'カウンター2', value: 0 },
];

test('はじめは合計値が0であること', async () => {
  render(<CounterList initialCounters={dummyCounters} />);
  expect(screen.getByText('合計値: 0')).toBeInTheDocument();
});

test('+ボタンを1回押下すると合計値が1になること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const incrementButtons = screen.getAllByRole('button', { name: '+' });
  await user.click(incrementButtons[0]);
  expect(screen.getByText('合計値: 1')).toBeInTheDocument();
});

test('2つのカウンターの+ボタンを1回ずつ押下すると合計値が2になること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const incrementButtons = screen.getAllByRole('button', { name: '+' });
  await user.click(incrementButtons[0]);
  await user.click(incrementButtons[1]);
  expect(screen.getByText('合計値: 2')).toBeInTheDocument();
});

test('カウンター追加ボタンを押すとカウンター自体が増えること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const addButton = screen.getByRole('button', { name: 'カウンターを追加' });
  await user.click(addButton);
  const counters = screen.getAllByRole('listitem');
  expect(counters).toHaveLength(3);
});
