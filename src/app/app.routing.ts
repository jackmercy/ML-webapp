import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

/* Public */
import { PublicComponent } from './public/components/public.component';
import { LoginComponent } from './public/components/login.component';
import { RegisterComponent } from './public/components/register.component';
/* Home */
import { HomeComponent } from './home/components/home.component';
import { MovieListComponent } from './home/components/movie-list.component';
import { MovieDetailComponent } from "./home/components/movie-detail.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
                {
                    path: '', component: HomeComponent,
                    children: [
                        {
                            path: '', component: MovieListComponent,
                        },
                        {
                            path: 'movie/:id', component: MovieDetailComponent,
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

