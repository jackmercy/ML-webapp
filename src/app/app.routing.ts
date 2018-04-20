import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

/* Public */
import { PublicComponent } from './public/components/public.component';
import { LoginComponent } from './public/components/login.component';
import { RegisterComponent } from './public/components/register.component';
/* Home */
import { HomeComponent } from './home/components/home.component';
import {ProductsComponent} from './home/components/products.component';
import { ProductDetailComponent } from './home/components/product-detail.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
                {
                    path: '', component: HomeComponent,
                    children: [
                        {
                            path: '', component: ProductsComponent,
                            children: [{
                                path: 'productDetail/:id', component: ProductDetailComponent
                            }]
                        }
                    ]
                }
            ],
            { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes { }

