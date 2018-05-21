import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
/* Modules */
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './components/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail.component';
import { MovieComponent } from './components/movie.component';
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
        MovieListComponent,
        MovieDetailComponent,
        MovieComponent
    ]
})
export class HomeModule { }
