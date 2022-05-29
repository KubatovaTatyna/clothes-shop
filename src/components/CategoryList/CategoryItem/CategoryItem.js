import { Link } from 'react-router-dom';
import classes from './CategoryItem.module.css';

const CategoryItem = ({ category }) => {
  return (
    <div className={classes.CategoryItem}>
      <div>
        <img src={category.image} />
        <Link to={'/categories/' + category.categoryId}>{category.title}</Link>
      </div>
    </div>);
}

export default CategoryItem;