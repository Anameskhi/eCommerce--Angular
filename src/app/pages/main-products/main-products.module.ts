import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './main-products-routing.module';
import { MainProductsComponent } from './main-products.component';
import { ProductCardModule } from 'src/app/features/product-card/product-card.module';


@NgModule({
  declarations: [
    MainProductsComponent
    ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductCardModule
  ]
})
export class MainProductsModule { }
