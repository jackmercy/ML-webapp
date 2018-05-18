import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    perPage: Number;
    currentPage: Number = 1;
    totalMovies: Number;
    moviePage = new Array<any>();
    posterUrl = 'https://image.tmdb.org/t/p/w185/';

    constructor(private _coreService: CoreService) { }

    ngOnInit() {
        this.perPage = 20;
        this._coreService.getMoviePage(this.currentPage, this.perPage).subscribe(data => {
            this.moviePage = data;
        });
        this._coreService.getTotalMovie().subscribe(data => {
            this.totalMovies = data;
            console.log(this.totalMovies);
        });
    }

    getPage(page: Number) {
        this.currentPage = page;
        this._coreService.getMoviePage(this.currentPage, this.perPage).subscribe(data => {
            this.moviePage = data;
        });
    }


}
