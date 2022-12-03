//ProductList#1 create model for product list
export class Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;

  constructor() {
    this.id = 1;
    this.name = '';
    this.price = 0;
    this.image = '';
    this.description = '';
  }
}
