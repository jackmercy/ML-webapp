import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RecommendService } from '../../core/services/recommend.service';
@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
    id: Number;
    movie: Object = {};
    cast: Array<Object> = [];
    similarMovies: Array<any>;
    constructor(private _coreService: CoreService,
                private _activatedRoute: ActivatedRoute,
                private _router: Router,
                private _recommendService: RecommendService) { }

    ngOnInit() {
        this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.id = +params.get('id');
            this._coreService.getMovieDetail(this.id).subscribe(data => this.movie = data);
            this._coreService.getCast(this.id).subscribe(data => this.cast = data);
            this._recommendService.getRecommendationBaseOnContent(String(this.id)).subscribe(data => {
                this.similarMovies = data['prediction'];
            });
        });
    }

    back() {
        this._router.navigate(['']);
    }

}
