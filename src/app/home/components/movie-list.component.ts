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
    searchQuery: String;
    isLoading: boolean;
    moviePage = new Array<any>();
    posterUrl = 'https://image.tmdb.org/t/p/w185/';

    constructor(private _coreService: CoreService,
                private _activatedRouter: ActivatedRoute) { }

    ngOnInit() {
        //this.isLoading = false;
        this.currentPage = 1;
        this.perPage = 20;

        this._activatedRouter.queryParams.subscribe((params: ParamMap) => {
            this.genresId = params['id'];
            this.searchQuery = params['query'];
            console.log(params);


            if (this.genresId) {
                // Page with genres
                this.category = params['name'];
                this._coreService.getMovieByGenre(this.genresId, this.currentPage).subscribe(data => {
                    this.moviePage = data['result'];
                    if (data['total_results'] > (1000 * 20)) {
                        this.totalMovies = 1000 * 20;
                    } else {
                        this.totalMovies = data['total_results'];
                    }
                    //this.isLoading = true;
                });
            } else if (this.searchQuery) {
                // Page with search
                this.category = `Results for "${this.searchQuery}"`;
                this._coreService.searchMovie(this.searchQuery, this.currentPage).subscribe(data => {
                    this.moviePage = data['result'];
                    if (data['total_results'] > (1000 * 20)) {
                        this.totalMovies = 1000 * 20;
                    } else {
                        this.totalMovies = data['total_results'];
                    }
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
            });
        } else if (this.searchQuery) {
            this._coreService.searchMovie(this.searchQuery, this.currentPage).subscribe(data => {
                this.moviePage = data['result'];
            });
        } else {
            this.currentPage = page;
            this._coreService.getMoviePage(this.currentPage, this.perPage).subscribe(data => {
                this.moviePage = data;
            });
        }

    }


}
