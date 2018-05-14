import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.service';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

    movie: Object = {};

    constructor(private _coreService: CoreService) { }

    ngOnInit() {
        this._coreService.getMovieDetail('862').subscribe(data => this.movie = data);
    }

    back() {

    }

}
