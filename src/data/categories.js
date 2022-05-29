import dresses from '../assets/categoryImage.webp';
import tops from '../assets/tops.webp';
import bags from '../assets/bags.webp';

const categories = [
  {
    categoryId: 'dresses',
    title: 'Dresses',
    image: dresses,
  },
  {
    categoryId: 'tops',
    title: 'Tops',
    image: tops,
  },
  {
    categoryId: 'bags',
    title: 'Bags',
    image: bags,
  }
]

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(category => category.categoryId === categoryId)
  ]
}