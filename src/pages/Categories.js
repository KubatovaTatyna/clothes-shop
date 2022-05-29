import { getCategories } from "../data/categories";
import CategoryList from "../components/CategoryList/CategoryList";

const Categories = () => {
  return (
    <>
    <h1>Shop by Category</h1>
      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Categories;