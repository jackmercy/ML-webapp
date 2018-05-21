import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class UserService {
    /* Note: store user hash,token, name, id in sessionStorage */
    userUrl = '/api/user';
    contractUrl = '/api/contract';

    constructor(private _http: HttpClient) { }

    isAuthorized(): boolean {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));

        return user ? true : false;
    }

}
