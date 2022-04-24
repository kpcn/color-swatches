import useSWR from 'swr';
import Button from '@/components/Button';
import { fetcher } from '@/utils/helper';
import styles from './Board.module.css';
import Card from '@/components/Card';

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
            <h3>Loading...</h3>
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
