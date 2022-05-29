import Header from "../components/Header/Header";
import headerImage from '../assets/women.gif'
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";
import CategoryList from "../components/CategoryList/CategoryList";
import Categories from "./Categories";

const Women = () => {
  return (
    <>
      <Header image={headerImage}></Header>
      <ProductList products={getProducts()}/>
      <Categories />
    </>
  );
}

export default Women;