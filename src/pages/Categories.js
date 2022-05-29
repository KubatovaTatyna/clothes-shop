import { getCategories } from "../data/categories";
import CategoryList from "../components/CategoryList/CategoryList";

const Categories = () => {
  return (
    <>
      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Categories;