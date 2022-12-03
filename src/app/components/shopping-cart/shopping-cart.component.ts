import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductServiceService } from '../../services/product-service.service';
import {CartService } from '../../services/cart.service';
import {OrderService} from '../../services/order.service';
import {Cart} from '../../models/cart';
import {Order} from '../../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart_items:Cart[] = [];
  cartTotalPrice:number = 0;

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router){}

  ngOnInit(): void {
    this.cart_items = this.cartService.getCartProducts();
    this.cartTotal();
  };
  // calculate total price
  cartTotal(): void {
    let total:number =0;
    this.cart_items.forEach(i => total +=(i.product.price * i.quantity));
    this.cartTotalPrice = total.toFixed(2) as unknown as number;

  };
  //remove itme from cart when quantity decrease to <=0
  OnChange(cart_item:Cart): void{
    if(cart_item.quantity <=0){
      alert('Item removed from cart !');
      this.cart_items = this.cartService.removeCartItem(cart_item);
      this.cartTotal();
    }
    else{
      this.cartTotal();
    }
  }

}