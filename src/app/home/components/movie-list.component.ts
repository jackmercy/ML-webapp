import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    moviesList = [];

    constructor(private _coreService: CoreService) { }

    ngOnInit() {
        this._coreService.getMovies().subscribe(data => this.moviesList = data);
    }

}
