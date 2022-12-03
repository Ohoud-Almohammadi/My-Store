import { Component } from '@angular/core';
import { Product } from '../../models/product';
import {Cart} from '../../models/cart';
import { ProductServiceService } from 'app/services/product-service.service';
import {CartService } from '../../services/cart.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products: Product[] = [];
  product_id:number = 0;
  product: Product = new Product;
  cart_item:Cart = new Cart;

  constructor(private productService: ProductServiceService, private route: ActivatedRoute, private cartService: CartService){
    this.route.params.subscribe(params => this.product_id = params['id']);
  }
  ngOnInit(): void {
    this.productService.getproducts().subscribe(data =>{
      this.products = data;
      this.product = this.products.find(p=> p.id == this.product_id) as unknown as Product;
    });
  }
  OnSubmit(product: Product, quantity: number): void {
    const cart_item:Cart = {product, quantity};
    this.cartService.addProductToCart(cart_item);
  }
}