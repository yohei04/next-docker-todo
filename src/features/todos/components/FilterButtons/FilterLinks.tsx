import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { FILTER_NAMES, TFilterName } from '../';
import style from './FilterLinks.module.css';

export const FilterLinks: FC = () => {
  const router = useRouter();
  const filter = router.query.filter as TFilterName;

  const isAllSelected = filter === FILTER_NAMES.ALL || filter === undefined;
  const isActiveSelected = filter === FILTER_NAMES.ACTIVE;
  const isCompletedSelected = filter === FILTER_NAMES.COMPLETED;

  return (
    <div className={style.root} role="tablist">
      <Link href={`?filter=${FILTER_NAMES.ALL}`}>
        <a
          role="tab"
          aria-selected={isAllSelected}
          aria-controls="panel-1"
          id="tab-1"
          tabIndex={isAllSelected ? 0 : -1}
        >
          All
        </a>
      </Link>
      <Link href={`?filter=${FILTER_NAMES.ACTIVE}`}>
        <a
          role="tab"
          aria-selected={isActiveSelected}
          aria-controls="panel-2"
          id="tab-1"
          tabIndex={isActiveSelected ? 0 : -1}
        >
          Active
        </a>
      </Link>
      <Link href={`?filter=${FILTER_NAMES.COMPLETED}`}>
        <a
          role="tab"
          aria-selected={isCompletedSelected}
          aria-controls="panel-3"
          id="tab-1"
          tabIndex={isCompletedSelected ? 0 : -1}
        >
          Completed
        </a>
      </Link>
    </div>
  );
};
