import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    genres: Array<Object> = [];
    brandName: String = 'Good Movies';
    isShowingGenre: boolean;
    isLoggedIn: boolean;
    user: Object = {};

    constructor(private _coreService: CoreService,
                private _router: Router) { }

    ngOnInit() {
        // this component is only init-ed once and is not re-inint every route changes
        // subscribe to this in oder to update isLoggedIn var after login (update name and sign out option)
        this._router.events.subscribe(event => {
            this.isLoggedIn = this._coreService.isLogin();
            if (this.isLoggedIn) {
                this.user = this._coreService.getCurrentUser();
            }
        });

        this.isShowingGenre = false;
        this._coreService.getGenres().subscribe(data => this.genres = data);
    }

    onMenuClicked() {
        this.isShowingGenre = !this.isShowingGenre;
    }

    logOut(): void {
        this._coreService.logout();
        this.isLoggedIn = false;
        this.user = {};
        this._router.navigate(['']);
    }

}
