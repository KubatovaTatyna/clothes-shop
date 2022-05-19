import { Link } from 'react-router-dom';
import classes from './ProductItem.module.css';

const ProductItem = ({ product }) => {
  return ( <div className={classes.ProductItem}>
    <img src={product.image}/>
    <div>
      <Link to={'/product/' + product.productId}>{product.title}</Link>
      <div className={classes.discount}>-{product.discount}%</div>
      <div className={classes.price}>${product.price}</div>
    </div>
  </div> );
}

export default ProductItem;