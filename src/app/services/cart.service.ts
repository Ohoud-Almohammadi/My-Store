import { Injectable } from '@angular/core';
import { Product } from 'app/models/product';
import { Cart } from 'app/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // initialize cart items
  public cart_items: Cart[] = [];

  constructor() {}
  // get cart items method
  getCartProducts(): Cart[] {
    return this.cart_items;
  }

  // add product to cart method
  addProductToCart(Cartitem: Cart): Cart[] {
    if (this.cart_items.length) {
      if (this.cart_items.some((i) => i['product']['id'] === Cartitem['product']['id'])) {
        alert(`${Cartitem.product.name} already added`);
      }
      else {
        alert(
          `${Cartitem.quantity} ${Cartitem.product.name} added to cart with items in it successfully`
        );
        this.cart_items.push(Cartitem);
      }
    } else {
      alert(`${Cartitem.quantity} ${Cartitem.product.name} added to cart successfully`);
      this.cart_items.push(Cartitem);
    }
    return this.cart_items;
  }
  // remove item from cart
  removeCartItem(Cartitem:Cart):Cart[]{
    this.cart_items = this.cart_items.filter(i => i.product.id != Cartitem.product.id);
    return this.cart_items;
  }
  // clear cart from items
  clear():void{
    this.cart_items = [];
  }

}
