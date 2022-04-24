import Button from '@/components/Button';
import styles from './Board.module.css';

const Board = () => {
  return (
    <main className={styles.board}>
      <section className={styles.palette}></section>
      <section className={styles.message_wrapper}></section>
      <section className={styles.actions}>
        <Button />
      </section>
    </main>
  );
};

export default Board;
