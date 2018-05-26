import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.service';
import { Router } from '@angular/router';
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
    private similarMovies: Array<any>;
    constructor(private _userService: UserService,
                private _router: Router,
                private _recommendService: RecommendService) { }

    ngOnInit() {
        this.user = this._userService.getCurrentUser();
        this._recommendService.getRecommendationBaseOnUser(String(this.user['id'])).subscribe(data => {
            this.similarMovies = data['prediction'];
        });
    }

}
