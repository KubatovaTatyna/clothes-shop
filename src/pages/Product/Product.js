import { useParams } from "react-router-dom";
import { getProduct } from "../../data/products";
import classes from './Product.module.css';


const Product = () => {

  const params = useParams();
  const product = getProduct(params.productId);

  if(!product) {
    return null;
  }
  return (
    <div className={classes.Product}>
      <div className={classes.image}>
        <img src={product.image}/>
      </div>
      <div className={classes.productDescription}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default Product;