import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
/* Modules */
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './components/movie-list.component';
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
        MovieListComponent
    ]
})
export class HomeModule { }
