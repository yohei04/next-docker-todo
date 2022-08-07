import { render, screen } from '@testing-library/react';

import { CounterList } from '../';
import { userEventSetup } from '../../../../utils/test/userEventSetup';

const dummyCounters = [
  { label: 'カウンター1', value: 0 },
  { label: 'カウンター2', value: 0 },
];

test('はじめは合計値が0であること', async () => {
  render(<CounterList initialCounters={dummyCounters} />);
  expect(screen.getByText('合計値: 0')).toBeInTheDocument();
});

test('+ボタンを1回押下すると合計値が1になること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const addButtons = screen.getAllByRole('button', { name: '+' });
  await user.click(addButtons[0]);
  expect(screen.getByText('合計値: 1')).toBeInTheDocument();
});

test('2つのカウンターの+ボタンを1回ずつ押下すると合計値が2になること', async () => {
  const { user } = userEventSetup(<CounterList initialCounters={dummyCounters} />);
  const addButtons = screen.getAllByRole('button', { name: '+' });
  await user.click(addButtons[0]);
  await user.click(addButtons[1]);
  expect(screen.getByText('合計値: 2')).toBeInTheDocument();
});
