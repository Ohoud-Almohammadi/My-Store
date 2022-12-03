import { Injectable } from '@angular/core';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order_items: Order = new Order;
  constructor() { }

  getOrder(): Order{
    return this.order_items;
  }
  addOrder(order: Order): void{
    this.order_items = order;
  }
  clear(): void{
    this.order_items = new Order;
  }
}
