import { useState, useContext } from 'react';
import Image from 'next/image';
import MyOrder from '@containers/MyOrder';
import Menu from './Menu';

import AppContext from '@context/AppContext';

import IconMenu from '@icons/icon_menu.svg';
import Logo from '@logos/logo_yard_sale.svg';
import IconShoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.nav}>
      <Image src={IconMenu} alt="menu" className={styles.menu} />

      <div className={styles.navbarLeft}>
        <Image src={Logo} alt="logo" className={styles.navLogo} />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className={styles.navbarRight}>
        <ul>
          <li className={styles.navbarEmail} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className={styles.navbarShoppingCart} onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={IconShoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
