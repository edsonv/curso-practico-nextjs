import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import IconClose from '@icons/icon_close.png';
import styles from '@styles/ProductDetail.module..scss';

const ProductDetail = () => {
  return (
    <aside className={styles.ProductDetail}>
      <div className="ProductDetail-close">
        <Image src={IconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
