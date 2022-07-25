import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios
        .get(API)
        .then((response) => response.data)
        .then((data) => {
          const filteredProducts = data.filter((product) => {
            let RegExTest = new RegExp('(ftp|http|https)://');

            return RegExTest.test(product.images[0]);
          });
          return filteredProducts;
        });
      setProducts(response);
    };
    fetch();
  }, [API]);

  return products;
};

export default useGetProducts;
