import jeans from '../assets/jeans.webp';
import shirt from '../assets/shirt.webp';
import tShirt from '../assets/t-shirt.webp';
import bags from '../assets/bags.webp';

const products = [
  {
    image: jeans,
    coverImage: 'cover',
    productId: 'jeans',
    categoryId: 'denim',
    price: 10,
    title: 'Jeans',
    discount: 50,
    description:'Light Washed Ripped Jeans'
  },
  {
    image: shirt,
    productId: 'shirt',
    categoryId: 'tops',
    price: 10,
    title: 'Shirt',
    discount: 50,
    description:'Green Shirt'
  },
  {
    image: tShirt,
    productId: 't-shirt',
    categoryId: 'tops',
    price: 10,
    title: 'T-shirt',
    discount: 50,
    description:'Sport Men T-shirt'
  },
  {
    image: bags,
    productId: 'bags',
    categoryId: 'bags',
    price: 10,
    title: 'Bag',
    discount: 50,
    description:'Sport Men T-shirt'
  }
]

export function getProducts(categoryId) {
  if(categoryId) {
    return products.filter(product => product.categoryId === categoryId);
  }

  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex(product => product.productId === productId)
  ]
}