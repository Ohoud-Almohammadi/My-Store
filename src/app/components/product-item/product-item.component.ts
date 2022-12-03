import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import {Cart} from '../../models/cart';
import {CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  // beacuse all data lives in parent ? we use @Input to allow childs recive data from parent
  @Input() productI: Product;
  @Input() quantity: number;
  // take data from child
  @Output() addedToCart= new EventEmitter();

  constructor(private cartService: CartService) {
    this.productI = new Product;
    this.quantity=0;
  }

  ngOnInit(): void {}
}
