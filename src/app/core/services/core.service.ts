import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
    movieByGenreUrl = 'https://api.themoviedb.org/3/discover/movie?';
    getGenreObjectsUrl = 'https://api.themoviedb.org/3/genre/movie/list?';
    searchUrl = 'https://api.themoviedb.org/3/search/movie?'
    config = '&language=en-US';

    isSignIn: BehaviorSubject<Boolean>;

    constructor(private _http: HttpClient) {
        this.isSignIn = new BehaviorSubject<Boolean>(false);
        // this.isSignIn.next(false);
    }

    login(id: string, password: string): Observable<any> {
        return this._http.post(this.userUrl + '/login',
            JSON.stringify({id: id, password: password}), httpOptions)
            .map((response: Response) => {
                const user = response;
                /* write to session storage here */
                this.isSignIn.next(true);
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            });
    }

    logout(): void {
        this.isSignIn.next(false);
        sessionStorage.removeItem('currentUser');
    }

    isLogin(): boolean {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user) {
            this.isSignIn.next(true);
            return true;
        } else {
            this.isSignIn.next(false);
            return false;
        }

    }

    getCurrentUser(): Object {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user) {
            return user;
        } else {
            const message = {
                message: 'Please log in'
            };
            return message;
        }
    }

    // Return a list of movies for a page
    getMoviePage(page: Number, perPage: Number): Observable<any> {
        return this._http.get(`${this.movieUrl}/list?page=${page}&perPage=${perPage}`,
            httpOptions)
            .map((response) => {
                const movieIds = _.clone(response);
                const movies: Array<Object> = [];
                movieIds.map(object => {
                    this.getMovieDetail(object['id']).subscribe(result => movies.push(result));
                });
                return movies;
            });
    }


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

    // Return list of movies that match a genres
    getMovieByGenre(id: Number, page: Number): Observable<any> {
        return this._http.get(`${this.movieByGenreUrl}api_key=${this.apiKey}&with_genres=${id}&page=${page}`)
            .map((response: Response) => {
                const object = response;
                const movies = object['results'];
                object['result'] = this.convertMovie(movies);
                return object;
            })
            .catch(error => error['errors']);
    }

    convertMovie(movies: Array<Object>): Array<Object> {
        _.forEach(movies, movie => {
            let genreObjects;
            const genreIds = movie['genre_ids'];

            this.getGenreById(genreIds).subscribe(result => {
                genreObjects = result;
                movie['genres'] = genreObjects;
            });
        });
        return movies;
    }

    // Return list of genres object by genre id (with id and name)
    getGenreById(genreIds: Array<any>): Observable<any[]> {
        let genreObjects: Array<any>;
        return this._http.get(`${this.getGenreObjectsUrl}api_key=${this.apiKey}`)
            .map(data => {
                genreObjects = data[ 'genres' ]; // get list of available genres
                const result: Array<Object> = [];

                _.forEach(genreIds, (_id) => {
                    const found = _.find(genreObjects, {id: _id});
                    result.push(found);
                });
                return result;
            });
    }

    // Return all genres
    getGenres(): Observable<any> {
        return this._http.get(`${this.getGenreObjectsUrl}api_key=${this.apiKey}`)
            .map((response: Response) => response['genres']);
    }

    searchMovie(query: String, page: Number) {
        return this._http.get(`${this.searchUrl}api_key=${this.apiKey}&query=${query}&page=${page}`)
            .map((response: Response) => {
                const object = response;
                const movies = object['results'];
                object['result'] = this.convertMovie(movies);
                return object;
            })
            .catch(error => error['errors']);
    }


}
