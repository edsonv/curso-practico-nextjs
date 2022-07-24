import { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import IconAddToCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width="100" height="100" layout="responsive" />
      <div className={styles.productInfo}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={IconAddToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
