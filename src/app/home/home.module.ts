import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
/* Modules */
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products.component';
import { ProductDetailComponent } from './components/product-detail.component';
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        SharedModule
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent,
        ProductsComponent,
        ProductDetailComponent
    ]
})
export class HomeModule { }
