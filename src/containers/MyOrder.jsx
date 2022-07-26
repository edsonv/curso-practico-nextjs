import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import OrderItem from '@components/OrderItem';

import IconArrow from '@icons/flechita.svg';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acc, curr) => acc + curr.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.myOrder}>
      <div className={styles.titleContainer}>
        <Image src={IconArrow} alt="arrow" />
        <p className={styles.title}>&nbsp;My order</p>
      </div>
      <div className={styles.myOrderContent}>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link href="/checkout" className={styles.primaryButton}>
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
