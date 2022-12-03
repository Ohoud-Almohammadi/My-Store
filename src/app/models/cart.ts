import { Product } from './product';

export class Cart {
  product: Product;
  quantity: number;

  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      description: '',
      image: ''
    };
    this.quantity = 1;
  }
}
