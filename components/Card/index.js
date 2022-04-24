import { formatColorDescription } from '@/utils/helper';
import styles from './Card.module.css';

const Card = ({ color }) => {
  const updatedColor = {
    backgroundColor: color.hex,
  };

  return (
    <div className={styles.card} style={updatedColor}>
      <div>{formatColorDescription(color)}</div>
    </div>
  );
};

export default Card;
