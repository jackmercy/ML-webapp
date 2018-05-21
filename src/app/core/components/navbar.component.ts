import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';

declare interface RouteInfo {
    path: string;
    title: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'voting', title: 'Voting', class: '' },
    { path: 'score-board', title: 'Scoreboard', class: '' }
];

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    brandName = 'Good Film';
    menuItems: any[];
    isLogin: boolean;
    user: Object = {};

    constructor(private _coreService: CoreService) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.isLogin = this._coreService.isLogin();
        if (this.isLogin) {
            this.user = this._coreService.getCurrentUser();
        }
    }
    
    logOut(): void {
        this._coreService.logout();
        this.isLogin = false;
    }

}
