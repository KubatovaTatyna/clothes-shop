import Header from "../components/Header/Header";
import headerImage from '../assets/women.gif'
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

const Women = () => {
  return (
    <>
      <Header image={headerImage}></Header>
      <ProductList products={getProducts()}/>
    </>
  );
}

export default Women;