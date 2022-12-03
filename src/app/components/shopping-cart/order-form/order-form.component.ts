import { Component } from '@angular/core';
import {CartService } from '../../../services/cart.service';
import {OrderService} from '../../../services/order.service';
import {Cart} from '../../../models/cart';
import {Order} from '../../../models/order';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  cart_items:Cart[] = [];
  cartTotalPrice:number = 0;
  order:Order = new Order;
  constructor(private cartService: CartService, private orderService: OrderService, private router: Router){}
  ngOnInit(): void {
    this.cart_items = this.cartService.getCartProducts();
    this.cartTotal();
  };
  cartTotal(): void {
    let total:number =0;
    this.cart_items.forEach(i => total +=(i.product.price * i.quantity));
    this.cartTotalPrice = total.toFixed(2) as unknown as number;

  };
  OnSubmit(full_name: string,
    address: string,
    credit_card_number: string,
    cart_items:Cart[],
    cartTotalPrice:number
  ): void {
    this.order = {full_name:full_name, address:address,credit_card_number:credit_card_number,cart: cart_items, total: cartTotalPrice};
    this.orderService.addOrder(this.order);
    this.router.navigate(['/confirmation-page']);
  }

}
