import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import {Cart} from '../../models/cart';
import { ProductServiceService } from '../../services/product-service.service';
import {CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  //ProductList#3, Injecting the Service in the constructor
  constructor(private productService: ProductServiceService, private cartService:CartService) {}

  ngOnInit(): void {
    this.productService.getproducts().subscribe(res => {
      this.products = res;
    });
  }
  addToCart(Cart_item: Cart): void {
    this.cartService.addProductToCart(Cart_item);
  }
}
