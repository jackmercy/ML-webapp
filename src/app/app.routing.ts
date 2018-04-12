import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

/* Public */
import { PublicComponent } from './public/components/public.component';
import { LoginComponent } from './public/components/login.component';
import { RegisterComponent } from './public/components/register.component';
/* Home */
import { HomeComponent } from './home/components/home.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: PublicComponent,
                children: [
                    {
                        path: '', component: LoginComponent
                    },
                    {
                        path: 'register', component: RegisterComponent
                    }
                ]
            },
            {
                path: 'home', component: HomeComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes { }

