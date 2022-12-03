import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order.service';
import {CartService} from 'app/services/cart.service';
import {Order} from '../../models/order';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  o:Order = new Order;
  constructor(private orderService:OrderService, private cartService: CartService){}
  ngOnInit(): void {
    this.o = this.orderService.getOrder();

  }
  OnClick(): void {
    this.orderService.clear();
    this.cartService.clear();
    alert('Order removed from cart');
  }
}
