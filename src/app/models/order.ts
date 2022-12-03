import { Cart } from './cart';

export class Order {
  full_name: string;
  address: string;
  credit_card_number: string;
  total: number;
  cart: Cart[];

  constructor() {
    this.full_name = '';
    this.address = '';
    this.credit_card_number = '';
    this.total = 0;
    this.cart = [
      {
        product: {
          id: 0,
          name: '',
          price: 0,
          description: '',
          image: ''
        },
        quantity: 0
      }
    ];
  }
}
