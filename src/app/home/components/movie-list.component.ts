import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { r } from '@angular/core/src/render3';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    category: String;
    genresId: Number;
    perPage: Number;
    currentPage: Number;
    totalMovies: Number;
    isLoading: boolean;
    moviePage = new Array<any>();
    posterUrl = 'https://image.tmdb.org/t/p/w185/';

    constructor(private _coreService: CoreService,
                private _activatedRouter: ActivatedRoute) { }

    ngOnInit() {
        this.isLoading = true;
        this.currentPage = 1;
        this.perPage = 20;

        this._activatedRouter.queryParams.subscribe((params: ParamMap) => {
            this.genresId = params['id'];

            
            if (this.genresId) {
                // Page with genres
                this.category = params['name'];
                this._coreService.getMovieByGenre(this.genresId, this.currentPage).subscribe(data => {
                    this.moviePage = data['result'];
                    this.totalMovies = data['total_results'];
                });
            } else {
                // Default page
                this.category = 'All movies';
                this._coreService.getMoviePage(this.currentPage, this.perPage).subscribe(data => {
                    this.moviePage = data;
                });
                this._coreService.getTotalMovie().subscribe(data => {
                    this.totalMovies = data;
                });
            }
        });


    }

    getPage(page: Number) {
        if (this.genresId) {
            this.currentPage = page;
            this._coreService.getMovieByGenre(this.genresId, this.currentPage).subscribe(data => {
                this.moviePage = data['result'];
                this.totalMovies = data['total_results'];
            });
        } else {
            this.currentPage = page;
            this._coreService.getMoviePage(this.currentPage, this.perPage).subscribe(data => {
                this.moviePage = data;
            });
        }

    }


}
