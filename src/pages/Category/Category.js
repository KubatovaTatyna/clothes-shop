import { useParams } from "react-router-dom";
import { getCategory } from "../../data/categories";
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
    </div>
  );
}

export default Category;