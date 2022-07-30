import Link from 'next/link';
import { FC } from 'react';

import { TodoDetail, TodoWrapper } from './';

export const TodoDetailTemplate: FC = () => {
  return (
    <>
      <Link href="/">トップへ</Link>
      <section>
        <h2>TODO詳細</h2>
        <TodoWrapper>チルドレン1</TodoWrapper>
        <TodoWrapper>
          {({ incrementByTwo }) => (
            <>
              <h5>チルドレン2</h5>
              <button onClick={incrementByTwo}>+2</button>
            </>
          )}
        </TodoWrapper>
        <TodoWrapper>
          <TodoDetail />
        </TodoWrapper>
      </section>
    </>
  );
};
