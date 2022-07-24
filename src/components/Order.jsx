import Image from 'next/image'
import IconArrow from '@icons/flechita.svg';
import styles '@styles/Order.module.scss';

const Order = () => {
  return (
    <div className={styles.order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={ IconArrow } alt="arrow" />
    </div>
  );
}

export default Order;