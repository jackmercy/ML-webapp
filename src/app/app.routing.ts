import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
/* Guards */
import { AuthGuard } from './core/guards/auth.guard';
/* Public */
import { PublicComponent } from './public/components/public.component';
import { LoginComponent } from './public/components/login.component';
import { RegisterComponent } from './public/components/register.component';
/* Home */
import { HomeComponent } from './home/components/home.component';
import { MovieListComponent } from './home/components/movie-list.component';
import { MovieDetailComponent } from './home/components/movie-detail.component';
import { MovieComponent } from './home/components/movie.component';
import { MoviesForYouComponent } from './home/components/movies-for-you.component';
import { NotFoundPageComponent } from "./home/components/not-found-page.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
                {
                    path: '', component: HomeComponent,
                    children: [
                        {
                            path: '',
                            redirectTo: 'movie',
                            pathMatch: 'full'
                        },
                        {
                            path: 'movie', component: MovieComponent,
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'list',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'list', component: MovieListComponent
                                },
                                {
                                    path: 'genre',
                                    component: MovieListComponent
                                },
                                {
                                    path: ':id', component: MovieDetailComponent
                                }
                            ]
                        },
                        {
                            path: 'login', component: PublicComponent,
                            children: [
                                {
                                    path: '', component: LoginComponent
                                }
                            ]
                        },
                        {
                            path: 'movies-for-you', canActivate: [AuthGuard] , component: MoviesForYouComponent
                        },
                        {
                            path: 'rated-movies', canActivate: [AuthGuard], component: MoviesForYouComponent
                        },
                        {
                            path: '**', component: NotFoundPageComponent
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

