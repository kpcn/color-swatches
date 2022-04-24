import Board from '@/components/Board'
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Color Swatches</title>
        <meta name="description" content="Orange is new black" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board />
    </div>
  );
}
