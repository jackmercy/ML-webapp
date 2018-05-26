import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class RecommendService {
    private baseUri = 'http://localhost:5050/api';
    private contentBasedUri = '/content-based/prediction';
    private linearRegression = '/linear-regression/prediction';
    constructor(private _http: HttpClient) { }

    getRecommendationBaseOnContent(movieId: String): Observable<any> {
        return this._http.post(this.baseUri + this.contentBasedUri,
            JSON.stringify({id: movieId}), httpOptions);
    }

    getRecommendationBaseOnUser(userId: String): Observable<any> {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        return this._http.post(this.baseUri + this.linearRegression,
            JSON.stringify({userId: user['id']}), httpOptions);
    }
}
