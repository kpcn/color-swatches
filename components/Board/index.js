import useSWR from 'swr';
import Button from '@/components/Button';
import { fetcher } from '@/utils/helper';
import Card from '@/components/Card';
import Spinner from '@/components/Spinner';
import styles from './Board.module.css';

const Board = () => {
  const { data, error } = useSWR('/api/v1/colors', fetcher);

  return (
    <main className={styles.board}>
      <section className={styles.palette}>
        {data?.map((color, index) => (
          <Card key={index} color={color} />
        ))}
      </section>
      <div className={styles.message_wrapper}>
        {!data && (
          <div className={styles.message}>
            <Spinner />
          </div>
        )}
        {error && (
          <span className={`${styles.message} ${styles.error}`}>
            Something went wrong!
          </span>
        )}
      </div>
      <section className={styles.actions}>
        <Button />
      </section>
    </main>
  );
};

export default Board;
