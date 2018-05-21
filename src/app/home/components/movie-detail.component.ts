import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
    id: Number;
    movie: Object = {};
    cast: Array<Object> = [];

    constructor(private _coreService: CoreService,
                private _activatedRoute: ActivatedRoute,
                private _router: Router) { }

    ngOnInit() {

        this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.id = +params.get('id');
            this._coreService.getMovieDetail(this.id).subscribe(data => this.movie = data);
            this._coreService.getCast(this.id).subscribe(data => this.cast = data);
        });


    }

    back() {
        this._router.navigate(['']);
    }

}
