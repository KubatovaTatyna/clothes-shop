import CategoryItem from './CategoryItem/CategoryItem';
import classes from './CategoryList.module.css';

const CategoryList = ({ categories }) => {
  const categoryItems = categories.map(category => (
    <CategoryItem key={category.categoryId} category={category} />
  ));

  return (
    <>
      <h1>Shop by Category</h1>
      <div className={classes.CategoryList}>
        {categoryItems}
      </div>
    </>
  );
}

export default CategoryList;