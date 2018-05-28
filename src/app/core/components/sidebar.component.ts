import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    genres: Array<Object> = [];
    brandName: String = 'Good Movie';
    isShowingGenre: boolean;
    isLogin: Boolean;
    user: Object;
    constructor(private _userService: UserService,
                private _coreService: CoreService,
                private _router: Router) { }

    ngOnInit() {
        this._router.events.subscribe(value => {
            this.isLogin = this._coreService.isLogin();
            this.user = this._userService.getCurrentUser();
        });
        this._router.onSameUrlNavigation = 'reload';
        this.user = this._userService.getCurrentUser();
        this.isShowingGenre = false;

        this.isLogin = this._coreService.isLogin();

        this._coreService.getGenres().subscribe(data => this.genres = data);
        this._coreService.isSignIn.subscribe( next => {
            this.isLogin = next ? true : false;
        });
    }

    onMenuClicked() {
        this.isShowingGenre = !this.isShowingGenre;
    }

    onSignOutClicked() {
        this._coreService.logout();
        this._router.navigate(['/movie/list']);
    }

    searchMovie(query: string) {
        if (query === '') {
            this._router.navigate(['/movie/list']);
        } else {
            this._router.navigate(['/movie/search'], { queryParams: { query: query }});
        }
    }

}
