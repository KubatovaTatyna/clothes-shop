import dresses from '../assets/categoryImage.webp';
import tops from '../assets/tops.webp';
import bags from '../assets/bags.webp';
import bottoms from '../assets/bottoms.webp';
import denim from '../assets/denim.webp';
import shoes from '../assets/shoes.webp';


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
    categoryId: 'denim',
    title: 'Denim',
    image: denim,
  },
  {
    categoryId: 'bottoms',
    title: 'Bottoms',
    image: bottoms,
  },
  {
    categoryId: 'shoes',
    title: 'Shoes',
    image: shoes,
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