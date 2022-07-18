import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/todo">TODOへ</Link>
    </div>
  );
};

export default Home;
