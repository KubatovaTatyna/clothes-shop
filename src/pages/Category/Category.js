import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import { getCategory } from "../../data/categories";
import { getProducts } from "../../data/products";
import classes from './Category.module.css';


const Category = () => {

  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }
  return (
    <div className={classes.Category}>
      <h1>{category.title}</h1>
      <img src={category.image} />
      <ProductList products={getProducts(category.categoryId)} />
    </div>
  );
}

export default Category;