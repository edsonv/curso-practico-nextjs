import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.checkout}>
        <div className={styles.checkoutContainer}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles.checkoutContent}>
            <div className={styles.order}>
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          {/* <OrderItem /> */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
