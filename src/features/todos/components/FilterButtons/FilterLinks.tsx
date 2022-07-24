import Link from 'next/link';
import { FC } from 'react';

import { FILTER_NAMES } from '../';
import style from './FilterLinks.module.css';

export const FilterLinks: FC = () => {
  return (
    <div className={style.root}>
      <Link href={`?filter=${FILTER_NAMES.ALL}`}>
        <a>All</a>
      </Link>
      <Link href={`?filter=${FILTER_NAMES.ACTIVE}`}>
        <a>Active</a>
      </Link>
      <Link href={`?filter=${FILTER_NAMES.COMPLETED}`}>
        <a>Completed</a>
      </Link>
    </div>
  );
};
