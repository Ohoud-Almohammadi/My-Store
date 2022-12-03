import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderFormComponent } from './components/shopping-cart/order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    NavbarComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    OrderConfirmationComponent,
    OrderFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, NgbModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
