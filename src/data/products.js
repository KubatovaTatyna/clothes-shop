import productImage from '../assets/jeans.webp';

const products = [
  {
    image: productImage,
    productId: 'jeans',
    price: 10,
    title: 'Jeans',
    discount: 50
  },
  {
    image: productImage,
    productId: 'shirt',
    price: 10,
    title: 'Shirt',
    discount: 50
  },
  {
    image: productImage,
    productId: 't-shirt',
    price: 10,
    title: 'T-shirt',
    discount: 50
  },
]

export function getProducts() {
  return products;
}