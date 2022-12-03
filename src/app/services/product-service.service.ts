//ProductList#2 Create product service to take data from json file
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  // Get data from local json file
  getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
}
