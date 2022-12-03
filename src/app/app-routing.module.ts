import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {OrderConfirmationComponent} from './components/order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'products/:id', component: ProductDetailsComponent},
  {path: 'confirmation-page', component:OrderConfirmationComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
