import Head from 'next/head';
import { SWRConfig } from 'swr';
import Board from '@/components/Board';
import { getColors } from '@/utils/helper';
import styles from '../styles/Home.module.css';

export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback, revalidateOnFocus: false }}>
      <div className={styles.container}>
        <Head>
          <title>Random Color Swatches</title>
          <meta name="description" content="Orange is new black" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Board />
      </div>
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const data = await getColors();

  return {
    props: {
      fallback: {
        '/api/v1/colors': data,
      },
    },
  };
}
