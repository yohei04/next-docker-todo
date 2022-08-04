// import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { CounterList } from '../';
import { userEventSetup } from '../../../../utils/test/userEventSetup';

test('はじめは合計値が0であること', async () => {
  render(<CounterList />);
  expect(screen.getByText('合計値: 0')).toBeInTheDocument();
});

test('+ボタンを1回押下すると合計値が1になること', async () => {
  const { user } = userEventSetup(<CounterList />);
  const addButtons = screen.getAllByRole('button', { name: '+' });
  await user.click(addButtons[0]);
  expect(screen.getByText('合計値: 1')).toBeInTheDocument();
});
