import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';

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
    constructor(private _coreService: CoreService) { }

    ngOnInit() {
        this.isShowingGenre = false;
        this._coreService.getGenres().subscribe(data => this.genres = data);
        this._coreService.isSignIn.subscribe( next => {
            if (next === true) {
                this.isLogin = true;
            } else {
                this.isLogin = false;
            }
        });
    }

    onMenuClicked() {
        this.isShowingGenre = !this.isShowingGenre;
    }

    onSignOutClicked() {
        this._coreService.logout();
    }

}
