import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
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
export class CoreService {
    userUrl = '/api/user';
    movieUrl = '/api/movie';
    apiKey = '431bc17da732dfb3be082e58f7a5cf27';
    baseUrl = 'https://api.themoviedb.org/3/movie/';
    config = '&language=en-US';

    constructor(private _http: HttpClient) { }

    login(id: string, password: string): Observable<any> {
        return this._http.post(this.userUrl + '/login',
            JSON.stringify({id: id, password: password}), httpOptions)
            .map((response: Response) => {
                const user = response;
                /* write to session storage here */
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            });
    }

   logout(): void {
        sessionStorage.removeItem('currentUser');
    }

    // Return a list of movies for a page
    getMoviePage(page: Number, perPage: Number): Observable<any> {
        return this._http.get(`${this.movieUrl}/list?page=${page}&perPage=${perPage}`,
            httpOptions)
                    .map((response) => {
                        const movies = response;
                        return movies;
                   });
    }

    // Connect to The Movie Database
    getMovieDetail(id: Number): Observable<any> {
        return this._http.get(this.baseUrl + id + '?api_key=' + this.apiKey + this.config);
    }

    getCast(id: Number): Observable<any> {
        return this._http.get(this.baseUrl + id + '/credits?api_key=' + this.apiKey)
            .map((response) => {
                let credit = response['cast'];
                credit = credit.slice(0, 11);
                return credit;
            });
    }

    // Return the number of pages (pagination)
    getTotalMovie(): Observable<any> {
        return this._http.get(this.movieUrl + '/total')
            .map((response) => {
                return response['total'];
            });
    }

}
