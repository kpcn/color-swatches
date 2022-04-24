import { useSWRConfig } from 'swr';
import styles from './Button.module.css';

const Button = () => {
  const { mutate } = useSWRConfig();

  const updateColor = () => mutate('/api/v1/colors');

  return (
    <button className={styles.btn} onClick={updateColor}>
      Generate new colors
    </button>
  );
};

export default Button;
