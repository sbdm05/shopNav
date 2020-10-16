import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
