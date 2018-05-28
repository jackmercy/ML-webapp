import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendService } from '../../core/services/recommend.service';
import { UserService } from '../../core/services/user.service';
@Component({
    selector: 'app-movies-for-you',
    templateUrl: './movies-for-you.component.html',
    styleUrls: ['./movies-for-you.component.scss']
})
export class MoviesForYouComponent implements OnInit {
    private category: String = 'Movies For You';
    private user: Object;
    private movies: Array<any>;
    isLoadingResults: boolean;

    constructor(private _userService: UserService,
                private _router: Router,
                private _recommendService: RecommendService,
                private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.user = this._userService.getCurrentUser();
        this.isLoadingResults = true;
        this._activatedRoute.url.subscribe(value => {
            const urlSegment = value[0];
            if (urlSegment.path === 'rated-movies') {
                this.category = 'Movies You Rated';
                this._recommendService.getRatedMovieByUser(String(this.user['id'])).subscribe(data => {
                    this.movies = data['result'];
                    this.isLoadingResults = false;
                });
            }
            if (urlSegment.path === 'movies-for-you') {
                this._recommendService.getRecommendationBaseOnUser(String(this.user['id'])).subscribe(data => {
                    this.movies = data['prediction'];
                    this.isLoadingResults = false;
                });
            }
        });


    }

}
