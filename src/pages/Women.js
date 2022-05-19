import Header from "../components/Header/Header";
import headerImage from '../assets/women.gif'
import ProductList from "../components/ProductList/ProductList";

import productImage from '../assets/jeans.webp';

const Women = () => {
  const products = {
    j: {
      image: productImage,
      path: '/',
      price: 10,
      title: 'Jeans',
      discount: 50
    },
    s: {
      image: productImage,
      path: '/',
      price: 10,
      title: 'Shirt',
      discount: 50
    },
    t: {
      image: productImage,
      path: '/',
      price: 10,
      title: 'T-shirt',
      discount: 50
    },
  }
  return (
    <>
      <Header image={headerImage}></Header>
      <ProductList products={products} />
    </>
  );
}

export default Women;